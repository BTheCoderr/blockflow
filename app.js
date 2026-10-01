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
  levelPickerTitle: document.getElementById("levelPickerTitle")
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

function attachSwipe(el,id) {
  let startX=0,startY=0;
  el.addEventListener("pointerdown", e => { if (!state.running) return; startX=e.clientX; startY=e.clientY; el.setPointerCapture?.(e.pointerId); });
  el.addEventListener("pointerup", e => {
    if (!state.running) return;
    const dx=e.clientX-startX, dy=e.clientY-startY;
    if (Math.max(Math.abs(dx),Math.abs(dy)) < 14) return;
    const dir = Math.abs(dx)>Math.abs(dy) ? (dx>0?"right":"left") : (dy>0?"down":"up");
    attemptMove(id,dir);
  });
}

function snapshot() {
  state.history.push({blocks:cloneBlocks(state.blocks),moves:state.moves,activeSwitches:[...state.activeSwitches],exitStep:state.exitStep});
  if (state.history.length > 80) state.history.shift();
}
function activateSwitches(block) {
  let changed=false;
  list("switches").forEach(s => {
    if (!state.activeSwitches.includes(s.id) && cellsFor(block).some(c => c.x===s.x && c.y===s.y)) {
      state.activeSwitches.push(s.id); changed=true;
    }
  });
  if (changed) { playTone(620); buzz([8,25,8]); }
}
function maybeTeleport(block) {
  if ((block.w||1)!==1 || (block.h||1)!==1) return false;
  const hit = portalAt(block.x,block.y);
  if (!hit || !canOccupy(block,hit.dest.x,hit.dest.y)) return false;
  block.x=hit.dest.x; block.y=hit.dest.y; playTone(700); buzz(10); return true;
}
function exitBlock(block) {
  state.blocks = state.blocks.filter(b => b.id !== block.id);
  if (list("exitOrder").length) state.exitStep++;
  playTone(820); buzz(12);
}
function resolveMotion(block,dir) {
  maybeTeleport(block);
  activateSwitches(block);
  let guard=0;
  while (state.blocks.includes(block) && iceUnder(block) && guard++ < 12) {
    if (canExit(block,dir)) { exitBlock(block); return; }
    const [dx,dy]=DIRS[dir];
    if (!canOccupy(block,block.x+dx,block.y+dy)) break;
    block.x += dx; block.y += dy;
    maybeTeleport(block);
    activateSwitches(block);
  }
}
function attemptMove(id,dir) {
  const block = state.blocks.find(b => b.id===id);
  if (!block || !oneWayAllows(block,dir)) { buzz(18); return; }
  if (canExit(block,dir)) {
    snapshot(); state.moves++; exitBlock(block); renderAll(); checkWin(); return;
  }
  const [dx,dy] = DIRS[dir];
  const nx=block.x+dx, ny=block.y+dy;
  if (!canOccupy(block,nx,ny)) { buzz(16); return; }
  snapshot();
  block.x=nx; block.y=ny; state.moves++;
  playTone(420); buzz(8);
  resolveMotion(block,dir);
  renderAll(); checkWin();
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
