const COLORS = {
  red: "#fb7185",
  blue: "#38bdf8",
  green: "#4ade80",
  yellow: "#facc15",
  purple: "#a78bfa"
};
const PATTERNS = { red:"pattern-circle", blue:"pattern-diamond", green:"pattern-stripe", yellow:"pattern-cross", purple:"pattern-diamond" };
const GRID = 6;

const els = {
  board: document.getElementById("board"),
  title: document.getElementById("levelTitle"),
  hint: document.getElementById("levelHint"),
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
  sound: document.getElementById("soundBtn")
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
  running: false
};
state.levelIndex = Math.max(0, Math.min(state.levelIndex, LEVELS.length - 1));

function cloneBlocks(blocks) { return blocks.map(b => ({...b})); }
function level() { return LEVELS[state.levelIndex]; }

function initLevel() {
  clearInterval(state.timerId);
  state.blocks = cloneBlocks(level().blocks);
  state.moves = 0;
  state.history = [];
  state.running = true;
  if (state.mode === "chill") state.timeLeft = Infinity;
  if (state.mode === "classic") state.timeLeft = level().time;
  if (state.mode === "rush") state.timeLeft = Math.max(12, Math.floor(level().time * .62));
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
  els.hint.textContent = l.hint;
  els.moves.textContent = state.moves;
  els.par.textContent = l.par;
  els.timer.textContent = Number.isFinite(state.timeLeft) ? `${state.timeLeft}s` : "∞";
  els.progressText.textContent = `${state.levelIndex + 1} / ${LEVELS.length}`;
  els.progressFill.style.width = `${((state.levelIndex + 1) / LEVELS.length) * 100}%`;
  els.accessibility.classList.toggle("on", state.colorblind);
  els.sound.classList.toggle("on", state.sound);
  document.querySelectorAll(".mode-chip").forEach(b => b.classList.toggle("active", b.dataset.mode === state.mode));
  renderBoard();
}

function renderBoard() {
  els.board.innerHTML = "";
  const cellPct = 100 / GRID;
  els.board.style.setProperty("--cell", `${cellPct}%`);
  level().gates.forEach(g => {
    const d = document.createElement("div");
    d.className = `gate ${g.side}`;
    d.style.background = COLORS[g.color];
    d.style.color = COLORS[g.color];
    if (g.side === "top" || g.side === "bottom") d.style.left = `${(g.pos + .5) * cellPct}%`;
    else d.style.top = `${(g.pos + .5) * cellPct}%`;
    els.board.appendChild(d);
  });
  level().walls.forEach(w => {
    const d = document.createElement("div");
    d.className = "wall";
    place(d, w.x, w.y);
    els.board.appendChild(d);
  });
  state.blocks.forEach(b => {
    const d = document.createElement("div");
    d.className = `block ${state.colorblind ? PATTERNS[b.color] : ""}`;
    d.dataset.id = b.id;
    d.setAttribute("aria-label", `${b.color} block`);
    d.style.background = COLORS[b.color];
    place(d,b.x,b.y);
    attachSwipe(d,b.id);
    els.board.appendChild(d);
  });
}

function place(el,x,y) {
  const gap = 5;
  const cell = 100 / GRID;
  el.style.left = `calc(${x * cell}% + ${gap}px)`;
  el.style.top = `calc(${y * cell}% + ${gap}px)`;
  el.style.width = `calc(${cell}% - ${gap * 2}px)`;
  el.style.height = `calc(${cell}% - ${gap * 2}px)`;
}

function attachSwipe(el,id) {
  let startX = 0, startY = 0;
  el.addEventListener("pointerdown", e => {
    if (!state.running) return;
    startX = e.clientX; startY = e.clientY;
    el.setPointerCapture?.(e.pointerId);
  });
  el.addEventListener("pointerup", e => {
    if (!state.running) return;
    const dx = e.clientX - startX, dy = e.clientY - startY;
    const min = 16;
    if (Math.max(Math.abs(dx),Math.abs(dy)) < min) return;
    const dir = Math.abs(dx) > Math.abs(dy) ? (dx > 0 ? "right":"left") : (dy > 0 ? "down":"up");
    attemptMove(id,dir);
  });
}

function occupant(x,y,idToIgnore) {
  if (x < 0 || x >= GRID || y < 0 || y >= GRID) return "edge";
  if (level().walls.some(w => w.x===x && w.y===y)) return "wall";
  return state.blocks.find(b => b.id !== idToIgnore && b.x===x && b.y===y) || null;
}

function matchingGate(block,dir) {
  const side = ({up:"top",down:"bottom",left:"left",right:"right"})[dir];
  const pos = (side === "top" || side === "bottom") ? block.x : block.y;
  return level().gates.some(g => g.color===block.color && g.side===side && g.pos===pos);
}

function attemptMove(id,dir) {
  const block = state.blocks.find(b => b.id===id);
  if (!block) return;
  const delta = {up:[0,-1],down:[0,1],left:[-1,0],right:[1,0]}[dir];
  const nx = block.x + delta[0], ny = block.y + delta[1];
  const hit = occupant(nx,ny,id);
  if (hit === "edge") {
    if (!matchingGate(block,dir)) { buzz(20); return; }
    snapshot();
    state.blocks = state.blocks.filter(b => b.id !== id);
    state.moves++;
    playTone(760);
    buzz(12);
    renderAll();
    checkWin();
    return;
  }
  if (hit) { buzz(16); return; }
  snapshot();
  block.x = nx; block.y = ny;
  state.moves++;
  playTone(420);
  buzz(8);
  renderAll();
}

function snapshot() {
  state.history.push({ blocks: cloneBlocks(state.blocks), moves: state.moves });
  if (state.history.length > 50) state.history.shift();
}

function undo() {
  if (!state.running || !state.history.length) return;
  const prev = state.history.pop();
  state.blocks = prev.blocks;
  state.moves = prev.moves;
  renderAll();
}

function checkWin() {
  if (state.blocks.length) return;
  state.running = false;
  clearInterval(state.timerId);
  const par = level().par;
  const delta = state.moves - par;
  const stars = delta <= 0 ? 3 : delta <= 3 ? 2 : 1;
  els.stars.textContent = "★".repeat(stars) + "☆".repeat(3-stars);
  els.winSummary.textContent = delta <= 0 ? "Perfect flow. No wasted motion." : `Cleared in ${state.moves} moves.`;
  els.yourMoves.textContent = state.moves;
  els.perfectMoves.textContent = par;
  els.win.classList.remove("hidden");
  const bestKey = `bf-best-${state.levelIndex}`;
  const oldBest = Number(localStorage.getItem(bestKey) || 9999);
  if (state.moves < oldBest) localStorage.setItem(bestKey, String(state.moves));
  playTone(980); setTimeout(()=>playTone(1180),90); setTimeout(()=>playTone(1380),180);
  buzz([18,40,18]);
}

function nextLevel() {
  els.win.classList.add("hidden");
  if (state.levelIndex < LEVELS.length - 1) state.levelIndex++;
  else state.levelIndex = 0;
  localStorage.setItem("bf-level", String(state.levelIndex));
  initLevel();
}

function setMode(mode) {
  state.mode = mode;
  localStorage.setItem("bf-mode", mode);
  els.win.classList.add("hidden");
  els.fail.classList.add("hidden");
  initLevel();
}

function buzz(pattern) {
  if (navigator.vibrate) navigator.vibrate(pattern);
}
function playTone(freq) {
  if (!state.sound) return;
  try {
    const AC = window.AudioContext || window.webkitAudioContext;
    const ctx = new AC();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "sine"; osc.frequency.value = freq;
    gain.gain.setValueAtTime(.025, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(.0001, ctx.currentTime + .08);
    osc.connect(gain); gain.connect(ctx.destination); osc.start(); osc.stop(ctx.currentTime + .08);
  } catch (_) {}
}

document.getElementById("undoBtn").addEventListener("click", undo);
document.getElementById("resetBtn").addEventListener("click", initLevel);
document.getElementById("nextBtn").addEventListener("click", nextLevel);
document.getElementById("replayBtn").addEventListener("click", () => { els.win.classList.add("hidden"); initLevel(); });
document.getElementById("retryBtn").addEventListener("click", () => { els.fail.classList.add("hidden"); initLevel(); });
document.getElementById("switchChillBtn").addEventListener("click", () => setMode("chill"));
document.querySelectorAll(".mode-chip").forEach(b => b.addEventListener("click", () => setMode(b.dataset.mode)));
els.accessibility.addEventListener("click", () => {
  state.colorblind = !state.colorblind;
  localStorage.setItem("bf-colorblind", state.colorblind ? "1":"0");
  renderAll();
});
els.sound.addEventListener("click", () => {
  state.sound = !state.sound;
  localStorage.setItem("bf-sound", state.sound ? "1":"0");
  renderAll();
});

initLevel();

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => navigator.serviceWorker.register("./service-worker.js").catch(() => {}));
}
