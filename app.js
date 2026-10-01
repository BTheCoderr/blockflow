const COLORS = {
  red: "#fb7185",
  blue: "#38bdf8",
  green: "#4ade80",
  yellow: "#facc15",
  purple: "#a78bfa"
};
const PATTERNS = { red:"pattern-circle", blue:"pattern-diamond", green:"pattern-stripe", yellow:"pattern-cross", purple:"pattern-diamond" };
const DIRS = { up:[0,-1], down:[0,1], left:[-1,0], right:[1,0] };
const ARROWS = { up:"↑", down:"↓", left:"←", right:"→" };

const els = {
  board: document.getElementById("board"),
  title: document.getElementById("levelTitle"),
  hint: document.getElementById("levelHint"),
  mechanics: document.getElementById("mechanicStrip"),
  moves: document.getElementById("moveCount"),
  par: document.getElementById("parCount"),
  timer: document.getElementById("timerDisplay"),
  progressText: document.getElementById("progressText"),
  progressFill: document.getElementById("progressFill"),
  win: document.getElementById("winModal"),
  fail: document.getElementById("failModal"),
  stars: document.getElementById("stars"),
  winSummary: document.getElementById("winSummary"),
  yourMoves: document.getElementById("yourMoves"),
  perfectMoves: document.getElementById("perfectMoves"),
  accessibility: document.getElementById("accessibilityBtn"),
  sound: document.getElementById("soundBtn"),
  levelModal: document.getElementById("levelModal"),
  levelGrid: document.getElementById("levelGrid"),
  levelPickerTitle: document.getElementById("levelPickerTitle"),
  gestureTip: document.getElementById("gestureTip")
};

let state = {
  levelIndex: Number(localStorage.getItem("bf-level") || 0),
  mode: localStorage.getItem("bf-mode") || "chill",
  colorblind: localStorage.getItem("bf-colorblind") === "1",
  sound: localStorage.getItem("bf-sound") !== "0",
  blocks: [],
  moves: 0,
  history: [],
  timeLeft: Infinity,
  timerId: null,
  running: false,
  activeSwitches: [],
  exitStep: 0
};
state.levelIndex = Math.max(0, Math.min(state.levelIndex, LEVELS.length - 1));
let dragSession = null;
const REDUCE_MOTION = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;

function cloneBlocks(blocks) { return blocks.map(b => ({w:1,h:1,...b})); }
function level() { return LEVELS[state.levelIndex]; }
function cols() { return level().cols || 6; }
function rows() { return level().rows || 6; }
function list(name) { return level()[name] || []; }

function bestFor(index) {
  const raw = localStorage.getItem(`bf-best-${LEVELS[index].id}`);
  if (raw == null) return null;
  const value = Number(raw);
  return Number.isFinite(value) ? value : null;
}
function unlockedThrough() {
  const stored = Number(localStorage.getItem(`bf-unlocked-${ACTIVE_DIFFICULTY}`) || 0);
  return Math.max(0, Math.min(LEVELS.length - 1, Math.max(stored, state.levelIndex)));
}
function unlockLevel(index) {
  const keyName = `bf-unlocked-${ACTIVE_DIFFICULTY}`;
  const current = Number(localStorage.getItem(keyName) || 0);
  const next = Math.min(index, LEVELS.length - 1);
  if (next > current) localStorage.setItem(keyName, String(next));
}
function starsFor(index) {
  const best = bestFor(index);
  if (best == null) return "☆☆☆";
  const target = LEVELS[index].par;
  const count = best <= target ? 3 : best <= target + 3 ? 2 : 1;
  return "★".repeat(count) + "☆".repeat(3 - count);
}
function renderLevelSelect() {
  if (!els.levelGrid) return;
  els.levelPickerTitle.textContent = `${DIFFICULTY_LABELS[ACTIVE_DIFFICULTY].replace(" ☠️","")} Journey`;
  els.levelGrid.innerHTML = "";
  const unlocked = unlockedThrough();
  LEVELS.forEach((item,index) => {
    const available = index <= unlocked;
    const best = bestFor(index);
    const button = document.createElement("button");
    button.className = `level-card ${index===state.levelIndex ? "current" : ""} ${available ? "" : "locked"}`;
    button.disabled = !available;
    button.setAttribute("aria-label", available ? `Level ${index+1}: ${item.name}` : `Level ${index+1} locked`);
    button.innerHTML = `<span class="level-number">${available ? index+1 : "🔒"}</span><strong>${item.name}</strong><span class="level-stars">${available ? starsFor(index) : "•••"}</span><small>${best == null ? (available ? "Not cleared" : "Locked") : `Best ${best} · Perfect ${item.par}`}</small>`;
    if (available) button.addEventListener("click", () => {
      state.levelIndex = index;
      localStorage.setItem("bf-level", String(index));
      els.levelModal.classList.add("hidden");
      initLevel();
    });
    els.levelGrid.appendChild(button);
  });
}
function openLevelSelect() {
  renderLevelSelect();
  els.levelModal.classList.remove("hidden");
}
function closeLevelSelect() { els.levelModal.classList.add("hidden"); }

function key(x,y) { return `${x},${y}`; }
function hasCell(items,x,y) { return items.some(item => item.x === x && item.y === y); }
function isPlayable(x,y) {
  return x >= 0 && x < cols() && y >= 0 && y < rows() && !hasCell(list("voids"),x,y);
}
function cellsFor(block, x=block.x, y=block.y) {
  const cells = [];
  for (let oy=0; oy<(block.h||1); oy++) for (let ox=0; ox<(block.w||1); ox++) cells.push({x:x+ox,y:y+oy});
  return cells;
}
function blockAt(x,y,ignoreId) {
  return state.blocks.find(b => b.id !== ignoreId && cellsFor(b).some(c => c.x===x && c.y===y)) || null;
}
function barrierAt(x,y) {
  return list("barriers").find(b => b.x===x && b.y===y && !state.activeSwitches.includes(b.id));
}
function canOccupy(block,x,y) {
  return cellsFor(block,x,y).every(c => isPlayable(c.x,c.y) && !hasCell(list("walls"),c.x,c.y) && !barrierAt(c.x,c.y) && !blockAt(c.x,c.y,block.id));
}
function frontierCells(block,dir) {
  const cells = cellsFor(block);
  if (dir === "left") return cells.filter(c => c.x === block.x);
  if (dir === "right") return cells.filter(c => c.x === block.x + (block.w||1) - 1);
  if (dir === "up") return cells.filter(c => c.y === block.y);
  return cells.filter(c => c.y === block.y + (block.h||1) - 1);
}
function nextExitRequirement() {
  const order = list("exitOrder");
  return order.length ? order[state.exitStep] : null;
}
function orderAllows(block) {
  const req = nextExitRequirement();
  return !req || req === block.id || req === block.color;
}
function gateAt(x,y,dir,color) {
  return list("gates").some(g => g.x===x && g.y===y && g.dir===dir && g.color===color);
}
function canExit(block,dir) {
  if (!orderAllows(block)) return false;
  const [dx,dy] = DIRS[dir];
  return frontierCells(block,dir).every(c => !isPlayable(c.x+dx,c.y+dy) && gateAt(c.x,c.y,dir,block.color));
}
function oneWayAllows(block,dir) {
  const tile = list("oneWays").find(t => cellsFor(block).some(c => c.x===t.x && c.y===t.y));
  return !tile || tile.dir === dir;
}
function iceUnder(block) { return (block.w||1)===1 && (block.h||1)===1 && hasCell(list("ice"),block.x,block.y); }
function portalAt(x,y) {
  for (const p of list("portals")) {
    if (p.a.x===x && p.a.y===y) return {portal:p,dest:p.b};
    if (p.b.x===x && p.b.y===y) return {portal:p,dest:p.a};
  }
  return null;
}

function initLevel() {
  clearInterval(state.timerId);
  state.blocks = cloneBlocks(level().blocks);
  state.moves = 0;
  state.history = [];
  state.activeSwitches = [];
  state.exitStep = 0;
  state.running = true;
  if (state.mode === "chill") state.timeLeft = Infinity;
  if (state.mode === "classic") state.timeLeft = level().time;
  if (state.mode === "rush") state.timeLeft = Math.max(14, Math.floor(level().time * .62));
  els.win.classList.add("hidden");
  els.fail.classList.add("hidden");
  renderAll();
  startTimer();
}

function startTimer() {
  if (!Number.isFinite(state.timeLeft)) return;
  state.timerId = setInterval(() => {
    if (!state.running) return;
    state.timeLeft--;
    els.timer.textContent = `${state.timeLeft}s`;
    if (state.timeLeft <= 0) {
      state.running = false;
      clearInterval(state.timerId);
      els.fail.classList.remove("hidden");
      buzz([50,35,90]);
    }
  }, 1000);
}

function renderAll() {
  const l = level();
  els.title.textContent = `Level ${state.levelIndex + 1} · ${l.name}`;
  const req = nextExitRequirement();
  els.hint.textContent = req ? `${l.hint}  Next out: ${req.toUpperCase()}.` : l.hint;
  els.moves.textContent = state.moves;
  els.par.textContent = l.par;
  els.timer.textContent = Number.isFinite(state.timeLeft) ? `${state.timeLeft}s` : "∞";
  els.progressText.textContent = `${state.levelIndex + 1} / ${LEVELS.length}`;
  els.progressFill.style.width = `${((state.levelIndex + 1) / LEVELS.length) * 100}%`;
  els.accessibility.classList.toggle("on", state.colorblind);
  els.sound.classList.toggle("on", state.sound);
  document.querySelectorAll(".mode-chip").forEach(b => b.classList.toggle("active", b.dataset.mode === state.mode));
  if (els.mechanics) {
    els.mechanics.innerHTML = (l.mechanics || ["Slide"]).map(m => `<span>${m}</span>`).join("");
  }
  if (els.gestureTip) {
    els.gestureTip.classList.toggle("learned", localStorage.getItem("bf-drag-tip-seen") === "1");
  }
  renderBoard();
}

function renderBoard() {
  const l = level();
  els.board.innerHTML = "";
  els.board.style.setProperty("--cols", cols());
  els.board.style.setProperty("--rows", rows());
  els.board.style.aspectRatio = `${cols()} / ${rows()}`;

  for (let y=0; y<rows(); y++) for (let x=0; x<cols(); x++) {
    if (!isPlayable(x,y)) continue;
    const d = document.createElement("div");
    d.className = "floor-cell";
    place(d,x,y);
    els.board.appendChild(d);
  }

  list("ice").forEach(t => {
    const d = document.createElement("div"); d.className = "tile ice-tile"; d.textContent = "❄"; place(d,t.x,t.y); els.board.appendChild(d);
  });
  list("oneWays").forEach(t => {
    const d = document.createElement("div"); d.className = "tile one-way"; d.textContent = ARROWS[t.dir]; place(d,t.x,t.y); els.board.appendChild(d);
  });
  list("switches").forEach(t => {
    const d = document.createElement("div"); d.className = `tile switch-tile ${state.activeSwitches.includes(t.id)?"active":""}`; d.textContent = "◆"; place(d,t.x,t.y); els.board.appendChild(d);
  });
  list("portals").forEach(p => {
    [p.a,p.b].forEach(pt => { const d=document.createElement("div"); d.className="tile portal-tile"; d.textContent=p.id || "◎"; place(d,pt.x,pt.y); els.board.appendChild(d); });
  });
  list("walls").forEach(w => { const d=document.createElement("div"); d.className="wall"; place(d,w.x,w.y); els.board.appendChild(d); });
  list("barriers").forEach(b => {
    const d=document.createElement("div");
    d.className = `barrier ${state.activeSwitches.includes(b.id)?"open":""}`;
    d.textContent = state.activeSwitches.includes(b.id) ? "" : "▥";
    place(d,b.x,b.y); els.board.appendChild(d);
  });
  list("gates").forEach(g => renderGate(g));

  state.blocks.forEach(b => {
    const d = document.createElement("div");
    d.className = `block ${state.colorblind ? PATTERNS[b.color] : ""} ${(b.w||1)>1 || (b.h||1)>1 ? "long-block" : ""}`;
    d.dataset.id = b.id;
    d.setAttribute("aria-label", `${b.color} block`);
    d.style.background = COLORS[b.color];
    place(d,b.x,b.y,b.w||1,b.h||1);
    attachSwipe(d,b.id);
    els.board.appendChild(d);
  });
}

function place(el,x,y,w=1,h=1) {
  const gap = 4;
  const cw = 100 / cols(), ch = 100 / rows();
  el.style.left = `calc(${x * cw}% + ${gap}px)`;
  el.style.top = `calc(${y * ch}% + ${gap}px)`;
  el.style.width = `calc(${w * cw}% - ${gap * 2}px)`;
  el.style.height = `calc(${h * ch}% - ${gap * 2}px)`;
}
function renderGate(g) {
  const d = document.createElement("div");
  d.className = `gate gate-${g.dir}`;
  d.style.background = COLORS[g.color]; d.style.color = COLORS[g.color];
  const cw=100/cols(), ch=100/rows();
  if (g.dir === "up" || g.dir === "down") {
    d.style.left = `calc(${g.x*cw}% + 8px)`;
    d.style.width = `calc(${cw}% - 16px)`;
    d.style.top = g.dir === "up" ? `calc(${g.y*ch}% + 1px)` : `calc(${(g.y+1)*ch}% - 8px)`;
    d.style.height = "7px";
  } else {
    d.style.top = `calc(${g.y*ch}% + 8px)`;
    d.style.height = `calc(${ch}% - 16px)`;
    d.style.left = g.dir === "left" ? `calc(${g.x*cw}% + 1px)` : `calc(${(g.x+1)*cw}% - 8px)`;
    d.style.width = "7px";
  }
  els.board.appendChild(d);
}

function boardMetrics() {
  const rect = els.board.getBoundingClientRect();
  return { rect, cw: rect.width / cols(), ch: rect.height / rows() };
}
function blockElement(id) {
  return els.board.querySelector(`.block[data-id="${id}"]`);
}
function applyDragVisual(clientX,clientY) {
  if (!dragSession) return;
  const el = blockElement(dragSession.id);
  if (!el) return;
  const {cw,ch}=boardMetrics();
  let dx=clientX-dragSession.lastX, dy=clientY-dragSession.lastY;
  if (Math.abs(dx)>Math.abs(dy)) dy*=.18; else dx*=.18;
  dx=Math.max(-cw*.38,Math.min(cw*.38,dx));
  dy=Math.max(-ch*.38,Math.min(ch*.38,dy));
  el.classList.add("dragging");
  el.style.transform=`translate3d(${dx}px,${dy}px,0) scale(1.045)`;
}
function clearDragVisual() {
  document.querySelectorAll(".block.dragging").forEach(el => {
    el.classList.remove("dragging");
    el.style.transform="";
  });
  els.board.classList.remove("drag-active");
}
function flashBlocked(id,dir) {
  const el=blockElement(id);
  if (!el || REDUCE_MOTION || !el.animate) return;
  const delta={left:[-9,0],right:[9,0],up:[0,-9],down:[0,9]}[dir] || [0,0];
  el.animate([
    {transform:"translate3d(0,0,0)"},
    {transform:`translate3d(${delta[0]}px,${delta[1]}px,0) scale(.97)`},
    {transform:"translate3d(0,0,0)"}
  ],{duration:150,easing:"cubic-bezier(.2,.8,.2,1)"});
}
function spawnCellPulse(x,y,type="portal") {
  if (REDUCE_MOTION) return;
  const {rect,cw,ch}=boardMetrics();
  const pulse=document.createElement("div");
  pulse.className=`cell-pulse ${type}`;
  const size=Math.min(cw,ch)*.7;
  pulse.style.left=`${rect.left+x*cw+cw/2-size/2}px`;
  pulse.style.top=`${rect.top+y*ch+ch/2-size/2}px`;
  pulse.style.width=`${size}px`;
  pulse.style.height=`${size}px`;
  document.body.appendChild(pulse);
  pulse.animate([
    {opacity:.95,transform:"scale(.35)"},
    {opacity:.45,transform:"scale(1.35)"},
    {opacity:0,transform:"scale(1.75)"}
  ],{duration:360,easing:"ease-out"}).finished.finally(()=>pulse.remove());
}
function spawnExitGhost(block,dir) {
  if (REDUCE_MOTION) return;
  const {rect,cw,ch}=boardMetrics();
  const gap=4;
  const ghost=document.createElement("div");
  ghost.className=`block motion-ghost ${state.colorblind ? PATTERNS[block.color] : ""} ${(block.w||1)>1 || (block.h||1)>1 ? "long-block" : ""}`;
  ghost.style.background=COLORS[block.color];
  ghost.style.left=`${rect.left+block.x*cw+gap}px`;
  ghost.style.top=`${rect.top+block.y*ch+gap}px`;
  ghost.style.width=`${(block.w||1)*cw-gap*2}px`;
  ghost.style.height=`${(block.h||1)*ch-gap*2}px`;
  document.body.appendChild(ghost);
  const distance=(dir==="left"||dir==="right"?cw:ch)*1.35;
  const dx=dir==="left"?-distance:dir==="right"?distance:0;
  const dy=dir==="up"?-distance:dir==="down"?distance:0;
  ghost.animate([
    {opacity:1,transform:"translate3d(0,0,0) scale(1)"},
    {opacity:.92,transform:`translate3d(${dx*.45}px,${dy*.45}px,0) scale(1.04)`},
    {opacity:0,transform:`translate3d(${dx}px,${dy}px,0) scale(.72)`}
  ],{duration:240,easing:"cubic-bezier(.18,.75,.25,1)"}).finished.finally(()=>ghost.remove());
}
function animateRenderedMove(id,from,effects=[]) {
  const block=state.blocks.find(b=>b.id===id);
  const el=blockElement(id);
  if (!block || !el || REDUCE_MOTION || !el.animate) return;
  const portals=effects.filter(e=>e.type==="portal");
  if (portals.length) {
    for (const p of portals) {
      spawnCellPulse(p.from.x,p.from.y,"portal");
      spawnCellPulse(p.to.x,p.to.y,"portal");
    }
    el.animate([
      {opacity:.18,transform:"scale(.48) rotate(-5deg)"},
      {opacity:1,transform:"scale(1.08) rotate(2deg)"},
      {opacity:1,transform:"scale(1) rotate(0)"}
    ],{duration:250,easing:"cubic-bezier(.2,.8,.2,1)"});
    return;
  }
  const {cw,ch}=boardMetrics();
  const dx=(from.x-block.x)*cw, dy=(from.y-block.y)*ch;
  const distance=Math.max(Math.abs(from.x-block.x),Math.abs(from.y-block.y));
  el.animate([
    {transform:`translate3d(${dx}px,${dy}px,0) scale(.98)`},
    {transform:"translate3d(0,0,0) scale(1)"}
  ],{duration:Math.min(280,120+distance*34),easing:effects.some(e=>e.type==="ice")?"cubic-bezier(.12,.82,.18,1)":"cubic-bezier(.2,.8,.2,1)"});
}
function celebrateWin() {
  if (REDUCE_MOTION) return;
  const rect=els.board.getBoundingClientRect();
  const cx=rect.left+rect.width/2, cy=rect.top+rect.height/2;
  const colors=Object.values(COLORS);
  for(let i=0;i<18;i++){
    const dot=document.createElement("div");
    dot.className="flow-particle";
    dot.style.left=`${cx-4}px`; dot.style.top=`${cy-4}px`; dot.style.background=colors[i%colors.length];
    document.body.appendChild(dot);
    const angle=(Math.PI*2*i)/18, dist=70+(i%5)*24;
    dot.animate([
      {opacity:1,transform:"translate3d(0,0,0) scale(1)"},
      {opacity:0,transform:`translate3d(${Math.cos(angle)*dist}px,${Math.sin(angle)*dist}px,0) scale(.2) rotate(${i*35}deg)`}
    ],{duration:520+(i%4)*70,easing:"cubic-bezier(.15,.75,.2,1)"}).finished.finally(()=>dot.remove());
  }
  els.board.animate([
    {filter:"brightness(1)"},
    {filter:"brightness(1.35)"},
    {filter:"brightness(1)"}
  ],{duration:320,easing:"ease-out"});
}
function attachSwipe(el,id) {
  el.addEventListener("pointerdown", e => {
    if (!state.running) return;
    e.preventDefault();
    clearDragVisual();
    dragSession={
      id,
      pointerId:e.pointerId,
      startX:e.clientX,
      startY:e.clientY,
      lastX:e.clientX,
      lastY:e.clientY,
      moved:false,
      steps:0
    };
    els.board.classList.add("drag-active");
    el.classList.add("dragging");
    el.style.transform="scale(1.045)";
  });
}
function handleDragMove(e) {
  if (!dragSession || e.pointerId!==dragSession.pointerId || !state.running) return;
  e.preventDefault();
  let guard=0;
  while (guard++<5 && dragSession && state.blocks.some(b=>b.id===dragSession.id)) {
    const {cw,ch}=boardMetrics();
    const dx=e.clientX-dragSession.lastX, dy=e.clientY-dragSession.lastY;
    const horizontal=Math.abs(dx/cw)>Math.abs(dy/ch);
    const threshold=(horizontal?cw:ch)*.46;
    const amount=horizontal?Math.abs(dx):Math.abs(dy);
    if (amount<threshold) break;
    const dir=horizontal?(dx>0?"right":"left"):(dy>0?"down":"up");
    const moved=attemptMove(dragSession.id,dir,{fromDrag:true});
    if (!moved) {
      dragSession.lastX=e.clientX;
      dragSession.lastY=e.clientY;
      break;
    }
    dragSession.moved=true;
    dragSession.steps++;
    if (horizontal) dragSession.lastX += (dx>0?1:-1)*cw*.72;
    else dragSession.lastY += (dy>0?1:-1)*ch*.72;
    if (dragSession.steps>=2 && localStorage.getItem("bf-drag-tip-seen")!=="1") {
      localStorage.setItem("bf-drag-tip-seen","1");
      els.gestureTip?.classList.add("learned");
    }
  }
  applyDragVisual(e.clientX,e.clientY);
}
function handleDragEnd(e) {
  if (!dragSession || e.pointerId!==dragSession.pointerId) return;
  const session=dragSession;
  clearDragVisual();
  dragSession=null;
  if (!state.running || session.moved) return;
  const dx=e.clientX-session.startX, dy=e.clientY-session.startY;
  if (Math.max(Math.abs(dx),Math.abs(dy))<16) return;
  const dir=Math.abs(dx)>Math.abs(dy)?(dx>0?"right":"left"):(dy>0?"down":"up");
  attemptMove(session.id,dir);
}
window.addEventListener("pointermove",handleDragMove,{passive:false});
window.addEventListener("pointerup",handleDragEnd,{passive:false});
window.addEventListener("pointercancel",e=>{
  if (!dragSession || e.pointerId!==dragSession.pointerId) return;
  clearDragVisual();
  dragSession=null;
});

function snapshot() {
  state.history.push({blocks:cloneBlocks(state.blocks),moves:state.moves,activeSwitches:[...state.activeSwitches],exitStep:state.exitStep});
  if (state.history.length > 80) state.history.shift();
}
function activateSwitches(block,effects=[]) {
  let changed=false;
  list("switches").forEach(s => {
    if (!state.activeSwitches.includes(s.id) && cellsFor(block).some(c => c.x===s.x && c.y===s.y)) {
      state.activeSwitches.push(s.id);
      effects.push({type:"switch",x:s.x,y:s.y,id:s.id});
      changed=true;
    }
  });
  if (changed) { playTone(620); buzz([8,25,8]); }
}
function maybeTeleport(block,effects=[]) {
  if ((block.w||1)!==1 || (block.h||1)!==1) return false;
  const hit = portalAt(block.x,block.y);
  if (!hit || !canOccupy(block,hit.dest.x,hit.dest.y)) return false;
  const from={x:block.x,y:block.y};
  block.x=hit.dest.x; block.y=hit.dest.y;
  effects.push({type:"portal",from,to:{x:block.x,y:block.y}});
  playTone(700); buzz([7,18,7]); return true;
}
function exitBlock(block,dir,effects=[]) {
  spawnExitGhost(block,dir);
  effects.push({type:"exit",x:block.x,y:block.y,dir,color:block.color});
  state.blocks = state.blocks.filter(b => b.id !== block.id);
  if (list("exitOrder").length) state.exitStep++;
  playTone(820); buzz([10,18,10]);
}
function resolveMotion(block,dir,effects=[]) {
  maybeTeleport(block,effects);
  activateSwitches(block,effects);
  let guard=0;
  while (state.blocks.includes(block) && iceUnder(block) && guard++ < 12) {
    if (canExit(block,dir)) { exitBlock(block,dir,effects); return; }
    const [dx,dy]=DIRS[dir];
    if (!canOccupy(block,block.x+dx,block.y+dy)) break;
    const from={x:block.x,y:block.y};
    block.x += dx; block.y += dy;
    effects.push({type:"ice",from,to:{x:block.x,y:block.y}});
    maybeTeleport(block,effects);
    activateSwitches(block,effects);
  }
}
function playMoveEffects(id,from,effects) {
  effects.filter(e=>e.type==="switch").forEach(e=>spawnCellPulse(e.x,e.y,"switch"));
  animateRenderedMove(id,from,effects);
}
function attemptMove(id,dir,options={}) {
  const block = state.blocks.find(b => b.id===id);
  if (!block || !oneWayAllows(block,dir)) {
    flashBlocked(id,dir);
    buzz(options.fromDrag?8:18);
    return false;
  }
  const from={x:block.x,y:block.y};
  const effects=[];
  if (canExit(block,dir)) {
    snapshot(); state.moves++;
    exitBlock(block,dir,effects);
    renderAll(); playMoveEffects(id,from,effects); checkWin();
    return true;
  }
  const [dx,dy] = DIRS[dir];
  const nx=block.x+dx, ny=block.y+dy;
  if (!canOccupy(block,nx,ny)) {
    flashBlocked(id,dir);
    buzz(options.fromDrag?8:16);
    return false;
  }
  snapshot();
  block.x=nx; block.y=ny; state.moves++;
  playTone(420); buzz(options.fromDrag?5:8);
  resolveMotion(block,dir,effects);
  renderAll(); playMoveEffects(id,from,effects); checkWin();
  return true;
}

function undo() {
  if (!state.running || !state.history.length) return;
  const prev=state.history.pop();
  state.blocks=prev.blocks; state.moves=prev.moves; state.activeSwitches=prev.activeSwitches; state.exitStep=prev.exitStep;
  renderAll();
}
function checkWin() {
  if (state.blocks.length || !state.running) return;
  state.running=false; clearInterval(state.timerId);
  const target=level().par, delta=state.moves-target;
  const starCount=delta<=0?3:delta<=3?2:1;
  els.stars.textContent="★".repeat(starCount)+"☆".repeat(3-starCount);
  els.winSummary.textContent=delta<=0?"Perfect flow. No wasted moves.":`Cleared in ${state.moves} moves.`;
  els.yourMoves.textContent=state.moves; els.perfectMoves.textContent=target;
  els.win.classList.remove("hidden");
  const bestKey=`bf-best-${level().id}`;
  const oldBest=Number(localStorage.getItem(bestKey)||9999);
  if (state.moves<oldBest) localStorage.setItem(bestKey,String(state.moves));
  localStorage.setItem(`bf-complete-${ACTIVE_DIFFICULTY}-${state.levelIndex}`, "1");
  unlockLevel(state.levelIndex + 1);
  celebrateWin();
  playTone(980); setTimeout(()=>playTone(1180),90); setTimeout(()=>playTone(1380),180); buzz([18,40,18]);
}
function nextLevel() {
  els.win.classList.add("hidden");
  state.levelIndex = state.levelIndex < LEVELS.length-1 ? state.levelIndex+1 : 0;
  localStorage.setItem("bf-level",String(state.levelIndex)); initLevel();
}
function setMode(mode) {
  state.mode=mode; localStorage.setItem("bf-mode",mode); initLevel();
}
function buzz(pattern) { if (navigator.vibrate) navigator.vibrate(pattern); }
function playTone(freq) {
  if (!state.sound) return;
  try {
    const AC=window.AudioContext||window.webkitAudioContext, ctx=new AC(), osc=ctx.createOscillator(), gain=ctx.createGain();
    osc.type="sine"; osc.frequency.value=freq; gain.gain.setValueAtTime(.025,ctx.currentTime); gain.gain.exponentialRampToValueAtTime(.0001,ctx.currentTime+.08);
    osc.connect(gain); gain.connect(ctx.destination); osc.start(); osc.stop(ctx.currentTime+.08);
  } catch (_) {}
}

document.getElementById("levelsBtn").addEventListener("click",openLevelSelect);
document.getElementById("closeLevelsBtn").addEventListener("click",closeLevelSelect);
els.levelModal.addEventListener("click",event=>{ if(event.target===els.levelModal) closeLevelSelect(); });
document.getElementById("undoBtn").addEventListener("click",undo);
document.getElementById("resetBtn").addEventListener("click",initLevel);
document.getElementById("nextBtn").addEventListener("click",nextLevel);
document.getElementById("replayBtn").addEventListener("click",()=>{els.win.classList.add("hidden");initLevel();});
document.getElementById("retryBtn").addEventListener("click",()=>{els.fail.classList.add("hidden");initLevel();});
document.getElementById("switchChillBtn").addEventListener("click",()=>setMode("chill"));
document.querySelectorAll(".mode-chip").forEach(b=>b.addEventListener("click",()=>setMode(b.dataset.mode)));
els.accessibility.addEventListener("click",()=>{state.colorblind=!state.colorblind;localStorage.setItem("bf-colorblind",state.colorblind?"1":"0");renderAll();});
els.sound.addEventListener("click",()=>{state.sound=!state.sound;localStorage.setItem("bf-sound",state.sound?"1":"0");renderAll();});

initLevel();
if ("serviceWorker" in navigator) {
  window.addEventListener("load", async () => {
    try {
      const hadController = Boolean(navigator.serviceWorker.controller);
      const registration = await navigator.serviceWorker.register("./service-worker.js", { updateViaCache: "none" });
      await registration.update();
      if (hadController) {
        let refreshing = false;
        navigator.serviceWorker.addEventListener("controllerchange", () => {
          if (refreshing) return;
          refreshing = true;
          window.location.reload();
        });
      }
    } catch (_) {}
  });
}
