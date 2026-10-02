import fs from "node:fs";
import vm from "node:vm";

const source = fs.readFileSync(new URL("../levels.js", import.meta.url), "utf8");
const context = { localStorage: { getItem: () => null }, console };
vm.createContext(context);
vm.runInContext(`${source}\nglobalThis.__levels = ALL_LEVELS;`, context);
const levels = context.__levels;
const errors = [];
const difficulties = ["easy", "intermediate", "hard", "extreme"];
const dirs = { left:[-1,0], right:[1,0], up:[0,-1], down:[0,1] };
const names = new Set();

function validateLayout(level,prefix) {
  const cols = level.cols || 6, rows = level.rows || 6;
  const voids = new Set((level.voids || []).map(v => `${v.x},${v.y}`));
  const playable = (x,y) => x >= 0 && x < cols && y >= 0 && y < rows && !voids.has(`${x},${y}`);
  const occupied = new Map();
  const mark = (x,y,type) => {
    const k = `${x},${y}`;
    if (!playable(x,y)) errors.push(`${prefix}: ${type} at non-playable ${k}`);
    if (occupied.has(k)) errors.push(`${prefix}: overlap at ${k} (${occupied.get(k)} + ${type})`);
    occupied.set(k,type);
  };
  for (const w of level.walls || []) mark(w.x,w.y,"wall");
  for (const b of level.barriers || []) mark(b.x,b.y,`barrier:${b.id}`);
  for (const block of level.blocks || []) {
    for (let oy=0; oy<(block.h||1); oy++) for (let ox=0; ox<(block.w||1); ox++) mark(block.x+ox,block.y+oy,`block:${block.id}`);
  }
  for (const gate of level.gates || []) {
    const delta = dirs[gate.dir];
    if (!delta) { errors.push(`${prefix}: invalid gate direction ${gate.dir}`); continue; }
    if (!playable(gate.x,gate.y)) errors.push(`${prefix}: gate anchored to non-playable ${gate.x},${gate.y}`);
    if (playable(gate.x+delta[0],gate.y+delta[1])) errors.push(`${prefix}: gate ${gate.color} ${gate.dir} does not face an edge/void`);
  }
  if (!(level.blocks||[]).length) errors.push(`${prefix}: no blocks`);
  if (!(level.gates||[]).length) errors.push(`${prefix}: no gates`);
  if (!Number.isFinite(level.par) || level.par < 1) errors.push(`${prefix}: invalid par`);
}

for (const [index, level] of levels.entries()) {
  const prefix = `#${index + 1} ${level.name}`;
  if (names.has(level.name)) errors.push(`${prefix}: duplicate name`);
  names.add(level.name);
  if (!difficulties.includes(level.difficulty)) errors.push(`${prefix}: invalid difficulty`);
  validateLayout(level,prefix);

  if (level.phases?.length) {
    if (!level.boss) errors.push(`${prefix}: phases require boss=true`);
    if (level.phases.length < 2) errors.push(`${prefix}: boss needs at least 2 phases`);
    const phasePar=level.phases.reduce((sum,phase)=>sum+(Number(phase.par)||0),0);
    if (phasePar !== level.bossPar) errors.push(`${prefix}: bossPar ${level.bossPar} does not match phase total ${phasePar}`);
    for (const [phaseIndex,phase] of level.phases.entries()) {
      const merged={...level,...phase,phases:undefined,boss:false};
      validateLayout(merged,`${prefix} phase ${phaseIndex+1}`);
      if (!phase.label) errors.push(`${prefix} phase ${phaseIndex+1}: missing label`);
      if (!phase.intro) errors.push(`${prefix} phase ${phaseIndex+1}: missing intro`);
    }
  }
}

const expectedCounts = { easy:19, intermediate:19, hard:19, extreme:18 };
for (const d of difficulties) {
  const count = levels.filter(l => l.difficulty === d).length;
  if (count !== expectedCounts[d]) errors.push(`${d}: expected ${expectedCounts[d]} levels, found ${count}`);
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}
const phaseCount=levels.reduce((sum,l)=>sum+(l.phases?.length||0),0);
console.log(`Validated ${levels.length} levels + ${phaseCount} boss phases (${difficulties.map(d => `${d}: ${levels.filter(l => l.difficulty===d).length}`).join(", ")}).`);
