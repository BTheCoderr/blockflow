import fs from "node:fs";
import vm from "node:vm";

const source = fs.readFileSync(new URL("../levels.js", import.meta.url), "utf8");
const context = { localStorage: { getItem: () => null }, console };
vm.createContext(context);
vm.runInContext(`${source}\nglobalThis.__levels = ALL_LEVELS;`, context);
const levels = context.__levels;

const DIRS = { up:[0,-1], down:[0,1], left:[-1,0], right:[1,0] };
const DIR_NAMES = Object.keys(DIRS);
const LIMIT = Number(process.env.BF_SOLVER_LIMIT || 750000);

function list(level, name) { return level[name] || []; }
function hasCell(items,x,y) { return items.some(item => item.x === x && item.y === y); }
function isPlayable(level,x,y) {
  const cols = level.cols || 6, rows = level.rows || 6;
  return x >= 0 && x < cols && y >= 0 && y < rows && !hasCell(list(level,"voids"),x,y);
}
function cellsFor(block,x=block.x,y=block.y) {
  const out=[];
  for (let oy=0; oy<(block.h||1); oy++) for (let ox=0; ox<(block.w||1); ox++) out.push({x:x+ox,y:y+oy});
  return out;
}
function blockAt(state,x,y,ignoreId) {
  return state.blocks.find(b => b.id !== ignoreId && cellsFor(b).some(c => c.x===x && c.y===y)) || null;
}
function barrierAt(level,state,x,y) {
  return list(level,"barriers").find(b => b.x===x && b.y===y && !state.activeSwitches.includes(b.id));
}
function canOccupy(level,state,block,x,y) {
  return cellsFor(block,x,y).every(c =>
    isPlayable(level,c.x,c.y) &&
    !hasCell(list(level,"walls"),c.x,c.y) &&
    !barrierAt(level,state,c.x,c.y) &&
    !blockAt(state,c.x,c.y,block.id)
  );
}
function frontierCells(block,dir) {
  const cells=cellsFor(block);
  if (dir==="left") return cells.filter(c=>c.x===block.x);
  if (dir==="right") return cells.filter(c=>c.x===block.x+(block.w||1)-1);
  if (dir==="up") return cells.filter(c=>c.y===block.y);
  return cells.filter(c=>c.y===block.y+(block.h||1)-1);
}
function nextExitRequirement(level,state) {
  const order=list(level,"exitOrder");
  return order.length ? order[state.exitStep] : null;
}
function orderAllows(level,state,block) {
  const req=nextExitRequirement(level,state);
  return !req || req===block.id || req===block.color;
}
function gateAt(level,x,y,dir,color) {
  return list(level,"gates").some(g=>g.x===x && g.y===y && g.dir===dir && g.color===color);
}
function canExit(level,state,block,dir) {
  if (!orderAllows(level,state,block)) return false;
  const [dx,dy]=DIRS[dir];
  return frontierCells(block,dir).every(c =>
    !isPlayable(level,c.x+dx,c.y+dy) && gateAt(level,c.x,c.y,dir,block.color)
  );
}
function oneWayAllows(level,block,dir) {
  const tile=list(level,"oneWays").find(t=>cellsFor(block).some(c=>c.x===t.x && c.y===t.y));
  return !tile || tile.dir===dir;
}
function iceUnder(level,block) {
  return (block.w||1)===1 && (block.h||1)===1 && hasCell(list(level,"ice"),block.x,block.y);
}
function portalAt(level,x,y) {
  for (const p of list(level,"portals")) {
    if (p.a.x===x && p.a.y===y) return {dest:p.b};
    if (p.b.x===x && p.b.y===y) return {dest:p.a};
  }
  return null;
}
function activateSwitches(level,state,block) {
  for (const s of list(level,"switches")) {
    if (!state.activeSwitches.includes(s.id) && cellsFor(block).some(c=>c.x===s.x && c.y===s.y)) {
      state.activeSwitches.push(s.id);
      state.activeSwitches.sort();
    }
  }
}
function maybeTeleport(level,state,block) {
  if ((block.w||1)!==1 || (block.h||1)!==1) return false;
  const hit=portalAt(level,block.x,block.y);
  if (!hit || !canOccupy(level,state,block,hit.dest.x,hit.dest.y)) return false;
  block.x=hit.dest.x; block.y=hit.dest.y;
  return true;
}
function exitBlock(level,state,block) {
  state.blocks=state.blocks.filter(b=>b.id!==block.id);
  if (list(level,"exitOrder").length) state.exitStep++;
}
function cloneState(state) {
  return {
    blocks: state.blocks.map(b=>({...b})),
    activeSwitches:[...state.activeSwitches],
    exitStep:state.exitStep
  };
}
function resolveMotion(level,state,block,dir) {
  maybeTeleport(level,state,block);
  activateSwitches(level,state,block);
  let guard=0;
  while (state.blocks.includes(block) && iceUnder(level,block) && guard++<16) {
    if (canExit(level,state,block,dir)) {
      exitBlock(level,state,block);
      return;
    }
    const [dx,dy]=DIRS[dir];
    if (!canOccupy(level,state,block,block.x+dx,block.y+dy)) break;
    block.x+=dx; block.y+=dy;
    maybeTeleport(level,state,block);
    activateSwitches(level,state,block);
  }
}
function move(level,state,id,dir) {
  const next=cloneState(state);
  const block=next.blocks.find(b=>b.id===id);
  if (!block || !oneWayAllows(level,block,dir)) return null;
  if (canExit(level,next,block,dir)) {
    exitBlock(level,next,block);
    return next;
  }
  const [dx,dy]=DIRS[dir];
  if (!canOccupy(level,next,block,block.x+dx,block.y+dy)) return null;
  block.x+=dx; block.y+=dy;
  resolveMotion(level,next,block,dir);
  return next;
}
function stateKey(state) {
  const blocks=[...state.blocks].sort((a,b)=>a.id.localeCompare(b.id))
    .map(b=>`${b.id}@${b.x},${b.y}`).join("|");
  return `${blocks}#${[...state.activeSwitches].sort().join(",")}#${state.exitStep}`;
}
function initialState(level) {
  return {
    blocks:(level.blocks||[]).map(b=>({w:1,h:1,...b})),
    activeSwitches:[],
    exitStep:0
  };
}
function reconstruct(goalKey,parents) {
  const actions=[];
  let key=goalKey;
  while (parents.get(key)?.parent) {
    const node=parents.get(key);
    actions.push(node.action);
    key=node.parent;
  }
  return actions.reverse();
}
function solveLevel(level) {
  const start=initialState(level);
  const startKey=stateKey(start);
  const queue=[start];
  const keys=[startKey];
  const parents=new Map([[startKey,{parent:null,action:null,depth:0}]]);
  let head=0;

  while (head<queue.length) {
    if (parents.size>LIMIT) return {status:"limit",solvable:false,optimalMoves:null,visited:parents.size,solution:[]};
    const state=queue[head];
    const currentKey=keys[head++];
    const depth=parents.get(currentKey).depth;
    if (state.blocks.length===0) {
      const solution=reconstruct(currentKey,parents);
      return {status:"solved",solvable:true,optimalMoves:depth,visited:parents.size,solution};
    }
    for (const block of state.blocks) {
      for (const dir of DIR_NAMES) {
        const next=move(level,state,block.id,dir);
        if (!next) continue;
        const k=stateKey(next);
        if (parents.has(k)) continue;
        parents.set(k,{parent:currentKey,action:`${block.id}:${dir}`,depth:depth+1});
        queue.push(next); keys.push(k);
      }
    }
  }
  return {status:"unsolved",solvable:false,optimalMoves:null,visited:parents.size,solution:[]};
}
function similarity(a,b) {
  if (!a.length || !b.length) return 0;
  const aa=a.map(x=>x.split(":")[1][0]).join("");
  const bb=b.map(x=>x.split(":")[1][0]).join("");
  const m=aa.length,n=bb.length;
  const dp=Array.from({length:m+1},(_,i)=>Array(n+1).fill(0));
  for(let i=0;i<=m;i++) dp[i][0]=i;
  for(let j=0;j<=n;j++) dp[0][j]=j;
  for(let i=1;i<=m;i++) for(let j=1;j<=n;j++) {
    dp[i][j]=Math.min(dp[i-1][j]+1,dp[i][j-1]+1,dp[i-1][j-1]+(aa[i-1]===bb[j-1]?0:1));
  }
  return 1-dp[m][n]/Math.max(m,n);
}

const results=[];
for (const level of levels) {
  const solved=solveLevel(level);
  results.push({
    difficulty:level.difficulty,
    name:level.name,
    target:level.par,
    ...solved,
    fingerprint:solved.solution.map(x=>x.split(":")[1][0]).join("")
  });
  const mark=solved.solvable ? "✓" : solved.status==="limit" ? "!" : "✗";
  console.log(`${mark} ${level.difficulty.padEnd(12)} ${level.name.padEnd(20)} optimal=${String(solved.optimalMoves ?? "-").padStart(3)} target=${String(level.par).padStart(3)} states=${solved.visited}`);
}

for (const difficulty of ["easy","intermediate","hard","extreme"]) {
  const group=results.filter(r=>r.difficulty===difficulty);
  for (let i=1;i<group.length;i++) {
    const score=similarity(group[i-1].solution,group[i].solution);
    group[i].similarityToPrevious=Number(score.toFixed(2));
    if (score>=0.85) group[i].similarityWarning=`Solution pattern is ${Math.round(score*100)}% similar to ${group[i-1].name}`;
  }
}

const summary={
  generatedAt:new Date().toISOString(),
  engine:"BlockFlow solver v1",
  stateLimit:LIMIT,
  total:results.length,
  solved:results.filter(r=>r.solvable).length,
  unresolved:results.filter(r=>!r.solvable).length,
  targetMismatches:results.filter(r=>r.solvable && r.target!==r.optimalMoves).length,
  results
};

const jsonArgIndex=process.argv.indexOf("--json");
if (jsonArgIndex>=0 && process.argv[jsonArgIndex+1]) {
  fs.writeFileSync(process.argv[jsonArgIndex+1], JSON.stringify(summary,null,2)+"\n");
}
if (process.argv.includes("--strict") && summary.unresolved) process.exitCode=1;
