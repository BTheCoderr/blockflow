import fs from "node:fs";
import vm from "node:vm";

const source = fs.readFileSync(new URL("../levels.js", import.meta.url), "utf8");
const context = {
  localStorage: { getItem: () => null },
  console
};
vm.createContext(context);
vm.runInContext(`${source}\nglobalThis.__levels = ALL_LEVELS;`, context);
const levels = context.__levels;
const errors = [];
const difficulties = ["easy", "intermediate", "hard", "extreme"];
const dirs = { left:[-1,0], right:[1,0], up:[0,-1], down:[0,1] };
const names = new Set();

for (const [index, level] of levels.entries()) {
  const prefix = `#${index + 1} ${level.name}`;
  if (names.has(level.name)) errors.push(`${prefix}: duplicate name`);
  names.add(level.name);
  if (!difficulties.includes(level.difficulty)) errors.push(`${prefix}: invalid difficulty`);
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
}

const expectedCounts = { easy:13, intermediate:13, hard:12, extreme:12 };
for (const d of difficulties) {
  const count = levels.filter(l => l.difficulty === d).length;
  if (count !== expectedCounts[d]) errors.push(`${d}: expected ${expectedCounts[d]} levels, found ${count}`);
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}
console.log(`Validated ${levels.length} levels (${difficulties.map(d => `${d}: ${levels.filter(l => l.difficulty===d).length}`).join(", ")}).`);
