const COLORS = {
  red: "#fb7185",
  blue: "#38bdf8",
  green: "#4ade80",
  yellow: "#facc15",
  purple: "#a78bfa"
};
const PATTERNS = { red:"pattern-circle", blue:"pattern-diamond", green:"pattern-stripe", yellow:"pattern-cross", purple:"pattern-dots" };
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
  winTitle: document.getElementById("winTitle"),
  nextBtn: document.getElementById("nextBtn"),
  replayBtn: document.getElementById("replayBtn"),
  yourMoves: document.getElementById("yourMoves"),
  perfectMoves: document.getElementById("perfectMoves"),
  yourTime: document.getElementById("yourTime"),
  bestTime: document.getElementById("bestTime"),
  resultCallout: document.getElementById("resultCallout"),
  timeLabel: document.getElementById("timeLabel"),
  modeExplainer: document.getElementById("modeExplainer"),
  bossBadge: document.getElementById("bossBadge"),
  accessibility: document.getElementById("accessibilityBtn"),
  sound: document.getElementById("soundBtn"),
  levelModal: document.getElementById("levelModal"),
  levelGrid: document.getElementById("levelGrid"),
  levelPickerTitle: document.getElementById("levelPickerTitle"),
  gestureTip: document.getElementById("gestureTip"),
  boardFrame: document.getElementById("boardFrame"),
  homeScreen: document.getElementById("homeScreen"),
  pause: document.getElementById("pauseModal"),
  homeProgressText: document.getElementById("homeProgressText"),
  homeProgressFill: document.getElementById("homeProgressFill"),
  homeCleared: document.getElementById("homeCleared"),
  homePerfect: document.getElementById("homePerfect"),
  homeStars: document.getElementById("homeStars"),
  homeCurrent: document.getElementById("homeCurrent"),
  progressBreakdown: document.getElementById("progressBreakdown"),
  homeRank: document.getElementById("homeRank"),
  rewardStrip: document.getElementById("rewardStrip"),
  continueBtn: document.getElementById("continueBtn"),
  homeLevelsBtn: document.getElementById("homeLevelsBtn"),
  pauseLevelsBtn: document.getElementById("pauseLevelsBtn"),
  pauseHomeBtn: document.getElementById("pauseHomeBtn"),
  worldRunBtn: document.getElementById("worldRunBtn"),
  worldRunMeta: document.getElementById("worldRunMeta"),
  copyPlaytestBtn: document.getElementById("copyPlaytestBtn"),
  runBanner: document.getElementById("runBanner"),
  runBannerText: document.getElementById("runBannerText"),
  coach: document.getElementById("coachModal"),
  mechanicToast: document.getElementById("mechanicToast"),
  mechanicToastIcon: document.getElementById("mechanicToastIcon"),
  mechanicToastTitle: document.getElementById("mechanicToastTitle"),
  mechanicToastText: document.getElementById("mechanicToastText"),
  phaseOverlay: document.getElementById("phaseOverlay"),
  phaseOverlayKicker: document.getElementById("phaseOverlayKicker"),
  phaseOverlayTitle: document.getElementById("phaseOverlayTitle"),
  phaseOverlayText: document.getElementById("phaseOverlayText")
};

let state = {
  levelIndex: Number(localStorage.getItem("bf-level") || 0),
  mode: localStorage.getItem("bf-mode") || "chill",
  colorblind: localStorage.getItem("bf-colorblind") === "1",
  sound: localStorage.getItem("bf-sound") !== "0",
  blocks: [],
  moves: 0,
  history: [],
  elapsedSeconds: 0,
  timeLeft: Infinity,
  timerId: null,
  running: false,
  paused: false,
  activeSwitches: [],
  exitStep: 0,
  bossPhase: 0,
  phaseTransitioning: false,
  lifecycle: "playing",
  lastResult: null,
  clockAnchorMs: null,
  run: {active:false,queue:[],position:0,totalSeconds:0,totalMoves:0,returnIndex:0,returnState:null,complete:false}
};
state.levelIndex = Math.max(0, Math.min(state.levelIndex, LEVELS.length - 1));
let dragSession = null;
let levelPickerOrigin = "game";
let mechanicToastTimer = null;
let lastAutosaveSecond = -1;
const REDUCE_MOTION = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
const SESSION_KEY = `bf-session-v4-${ACTIVE_DIFFICULTY}`;
const StateCore = globalThis.BlockFlowState;
const RuntimeCore = globalThis.BlockFlowRuntime;
if (!StateCore) throw new Error("Block Flow state core failed to load");
if (!RuntimeCore) throw new Error("Block Flow runtime core failed to load");

let focusStack=[];
function focusDialog(dialog) {
  if (!dialog) return;
  const active=document.activeElement;
  if (active && active!==document.body && !dialog.contains(active)) focusStack.push(active);
  requestAnimationFrame(()=>{
    const target=dialog.querySelector('button:not([disabled]),[href],[tabindex]:not([tabindex="-1"])');
    target?.focus?.();
  });
}
function restoreDialogFocus() {
  const target=focusStack.pop();
  if (target?.isConnected) target.focus?.();
}
function visibleDialog() {
  return [els.coach,els.levelModal,els.pause,els.win,els.fail,els.homeScreen]
    .find(dialog=>dialog && !dialog.classList.contains("hidden"));
}
function trapDialogFocus(event) {
  if (event.key!=="Tab") return;
  const dialog=visibleDialog();
  if (!dialog) return;
  const items=[...dialog.querySelectorAll('button:not([disabled]),[href],[tabindex]:not([tabindex="-1"])')]
    .filter(item=>!item.hidden && item.offsetParent!==null);
  if (!items.length) return;
  const first=items[0],last=items[items.length-1];
  if (event.shiftKey && document.activeElement===first) { event.preventDefault(); last.focus(); }
  else if (!event.shiftKey && document.activeElement===last) { event.preventDefault(); first.focus(); }
}

function cloneBlocks(blocks) { return blocks.map(b => ({w:1,h:1,...b})); }
function baseLevel() { return LEVELS[state.levelIndex]; }
function level() {
  const base=baseLevel();
  const phase=base?.phases?.[state.bossPhase];
  return phase ? {...base,...phase,phases:base.phases,boss:true} : base;
}
function totalPerfectFor(item=baseLevel()) { return StateCore.totalPerfectFor(item); }
function emptyRun() { return {active:false,queue:[],position:0,totalSeconds:0,totalMoves:0,returnIndex:0,returnState:null,complete:false}; }
function cols() { return level().cols || 6; }
function rows() { return level().rows || 6; }
function list(name) { return level()[name] || []; }

const METRICS_KEY="bf-playtest-v1";
function readMetrics() {
  try {
    return JSON.parse(localStorage.getItem(METRICS_KEY)||'{"levels":{},"worldRuns":{"starts":0,"completions":0}}');
  } catch (_) {
    return {levels:{},worldRuns:{starts:0,completions:0}};
  }
}
function updateLevelMetric(id,field,amount=1) {
  try {
    const metrics=readMetrics();
    metrics.levels ||= {};
    metrics.levels[id] ||= {starts:0,restarts:0,undos:0,completions:0,totalSeconds:0,totalMoves:0};
    metrics.levels[id][field]=(Number(metrics.levels[id][field])||0)+amount;
    localStorage.setItem(METRICS_KEY,JSON.stringify(metrics));
  } catch (_) {}
}
function updateRunMetric(field,amount=1) {
  try {
    const metrics=readMetrics();
    metrics.worldRuns ||= {starts:0,completions:0};
    metrics.worldRuns[field]=(Number(metrics.worldRuns[field])||0)+amount;
    localStorage.setItem(METRICS_KEY,JSON.stringify(metrics));
  } catch (_) {}
}
async function copyPlaytestReport() {
  const payload={
    schema:1,
    generatedAt:new Date().toISOString(),
    build:"v14",
    difficulty:ACTIVE_DIFFICULTY,
    metrics:readMetrics()
  };
  const text=JSON.stringify(payload,null,2);
  try {
    await navigator.clipboard.writeText(text);
    els.copyPlaytestBtn.textContent="Copied ✓";
  } catch (_) {
    const area=document.createElement("textarea");
    area.value=text;
    area.setAttribute("readonly","");
    area.style.position="fixed";
    area.style.opacity="0";
    document.body.appendChild(area);
    area.select();
    document.execCommand?.("copy");
    area.remove();
    els.copyPlaytestBtn.textContent="Copied ✓";
  }
  setTimeout(()=>{els.copyPlaytestBtn.textContent="Copy playtest report";},1800);
}

function migrateStorageV4() {
  const marker="bf-storage-v4-migrated";
  if (localStorage.getItem(marker)==="1") return;
  for (const difficulty of DIFFICULTIES) {
    for (const version of ["v3","v2"]) localStorage.removeItem(`bf-session-${version}-${difficulty}`);
  }
  const unlockedKey=`bf-unlocked-${ACTIVE_DIFFICULTY}`;
  const safeUnlock=Math.max(0,Math.min(LEVELS.length-1,Number(localStorage.getItem(unlockedKey))||0));
  const storedLevel=Math.max(0,Number(localStorage.getItem("bf-level"))||0);
  if (storedLevel>safeUnlock) {
    localStorage.setItem("bf-level",String(safeUnlock));
    state.levelIndex=safeUnlock;
  }
  for (const item of ALL_LEVELS.filter(level=>level.boss)) {
    localStorage.removeItem(`bf-best-${item.id}`);
    localStorage.removeItem(`bf-best-time-${item.id}`);
  }
  for (const difficulty of DIFFICULTIES) {
    localStorage.removeItem(`bf-run-best-time-${difficulty}`);
    localStorage.removeItem(`bf-run-best-moves-${difficulty}`);
  }
  localStorage.setItem(marker,"1");
}

function bestFor(index) {
  const raw = localStorage.getItem(`bf-best-${LEVELS[index].id}`);
  if (raw == null) return null;
  const value = Number(raw);
  return Number.isFinite(value) ? value : null;
}
function bestTimeFor(index) {
  const raw=localStorage.getItem(`bf-best-time-${LEVELS[index].id}`);
  if (raw==null) return null;
  const value=Number(raw);
  return Number.isFinite(value) && value>=0 ? value : null;
}
function formatTime(seconds) {
  const safe=Math.max(0,Math.floor(Number(seconds)||0));
  const minutes=Math.floor(safe/60);
  return `${minutes}:${String(safe%60).padStart(2,"0")}`;
}
function timeTargetFor(item=baseLevel()) {
  if (item?.boss && item?.bossTime) return Math.max(20,Number(item.bossTime)||60);
  return Math.max(20,Number(item?.time)||60);
}
function clockCanRun() {
  return state.running && !state.paused && !document.hidden;
}
function syncClock(now=Date.now(),force=false) {
  const canRun=force ? state.running && !state.paused : clockCanRun();
  const consumed=RuntimeCore.consumeClock(state.clockAnchorMs,now,canRun);
  if (!consumed.seconds) return 0;
  state.clockAnchorMs=consumed.anchorMs;
  const applied=RuntimeCore.applyElapsed({
    elapsedSeconds:state.elapsedSeconds,
    timeLeft:state.timeLeft,
    mode:state.mode
  },consumed.seconds);
  state.elapsedSeconds=applied.elapsedSeconds;
  state.timeLeft=applied.timeLeft;
  return consumed.seconds;
}
function startClockAnchor() {
  if (clockCanRun()) state.clockAnchorMs=Date.now();
}
function stopClockAnchor() {
  syncClock(Date.now(),true);
  state.clockAnchorMs=null;
}
function renderClock() {
  els.timer.textContent=state.mode==="rush" ? formatTime(state.timeLeft) : formatTime(state.elapsedSeconds);
  renderRunBanner();
}
function unlockedThrough() {
  const stored = Number(localStorage.getItem(`bf-unlocked-${ACTIVE_DIFFICULTY}`) || 0);
  return StateCore.unlockedThrough(stored,state,LEVELS.length);
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
  const target = totalPerfectFor(LEVELS[index]);
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
    const bestTime=bestTimeFor(index);
    const button = document.createElement("button");
    const perfect=best!=null && best<=totalPerfectFor(item);
    button.className = `level-card ${index===state.levelIndex ? "current" : ""} ${available ? "" : "locked"} ${perfect ? "perfect" : ""}`;
    button.disabled = !available;
    button.setAttribute("aria-label", available ? `Level ${index+1}: ${item.name}` : `Level ${index+1} locked`);
    button.innerHTML = `<span class="level-number">${available ? index+1 : "🔒"}</span><strong>${item.boss?"BOSS · ":""}${item.name}</strong><span class="level-stars">${available ? starsFor(index) : "•••"}</span><small>${best == null ? (available ? `Target ${formatTime(timeTargetFor(item))}` : "Locked") : `${perfect?"PERFECT · ":""}Best ${best} moves${bestTime!=null?` · ${formatTime(bestTime)}`:""}`}</small>`;
    if (available) button.addEventListener("click", () => {
      state.levelIndex = index;
      localStorage.setItem("bf-level", String(index));
      els.levelModal.classList.add("hidden");
      clearSession();
      transitionToLevel(() => {
        initLevel();
        resumeGame({ onboarding:false });
      });
    });
    els.levelGrid.appendChild(button);
  });
}
function openLevelSelect(origin="game") {
  levelPickerOrigin = origin;
  if (state.run.active) cancelWorldRun();
  stopClockAnchor();
  state.paused = true;
  saveSession();
  els.homeScreen.classList.add("hidden");
  els.pause.classList.add("hidden");
  renderLevelSelect();
  els.levelModal.classList.remove("hidden");
  focusDialog(els.levelModal);
}
function closeLevelSelect() {
  els.levelModal.classList.add("hidden");
  restoreDialogFocus();
  if (levelPickerOrigin === "home") openHomeScreen();
  else if (levelPickerOrigin === "pause") openPauseMenu();
  else resumeGame({ onboarding:false });
}

function sessionPayload() {
  return {
    version:StateCore.SESSION_VERSION,
    savedAt:Date.now(),
    lifecycle:state.lifecycle,
    levelId:baseLevel().id,
    levelIndex:state.levelIndex,
    mode:state.mode,
    blocks:cloneBlocks(state.blocks),
    moves:state.moves,
    history:state.history.slice(-40),
    activeSwitches:[...state.activeSwitches],
    exitStep:state.exitStep,
    bossPhase:state.bossPhase,
    elapsedSeconds:state.elapsedSeconds,
    timeLeft:Number.isFinite(state.timeLeft)?state.timeLeft:null,
    lastResult:state.lastResult ? {...state.lastResult} : null,
    run:{
      ...state.run,
      queue:[...(state.run?.queue||[])],
      returnState:state.run?.returnState ? JSON.parse(JSON.stringify(state.run.returnState)) : null
    }
  };
}
function saveSession() {
  if ((!state.running && !state.run?.active) || !level()) return;
  if (state.running && !state.paused) syncClock();
  try { localStorage.setItem(SESSION_KEY,JSON.stringify(sessionPayload())); } catch (_) {}
}
function restoreSession() {
  try {
    const raw=localStorage.getItem(SESSION_KEY);
    if (!raw) return false;
    const saved=JSON.parse(raw);
    if (!StateCore.sessionCompatible(saved,LEVELS)) {
      localStorage.removeItem(SESSION_KEY);
      return false;
    }
    const index=LEVELS.findIndex(item=>item.id===saved.levelId);
    state.levelIndex=index;
    if (!saved.run?.active) localStorage.setItem("bf-level",String(index));
    if (["chill","classic","rush"].includes(saved.mode)) {
      state.mode=saved.mode;
      localStorage.setItem("bf-mode",saved.mode);
    }
    state.blocks=cloneBlocks(saved.blocks);
    state.moves=Math.max(0,Number(saved.moves)||0);
    state.history=Array.isArray(saved.history)?saved.history.slice(-40):[];
    state.activeSwitches=Array.isArray(saved.activeSwitches)?[...saved.activeSwitches]:[];
    state.exitStep=Math.max(0,Number(saved.exitStep)||0);
    state.bossPhase=Math.max(0,Number(saved.bossPhase)||0);
    state.elapsedSeconds=Math.max(0,Number(saved.elapsedSeconds)||0);
    state.timeLeft=saved.timeLeft==null?Infinity:Math.max(0,Number(saved.timeLeft)||0);
    state.lifecycle=saved.lifecycle||"playing";
    state.lastResult=saved.lastResult && typeof saved.lastResult==="object" ? {...saved.lastResult} : null;
    state.run=StateCore.sanitizeRun(saved.run,LEVELS.length) || emptyRun();
    state.clockAnchorMs=null;
    return true;
  } catch (_) {
    localStorage.removeItem(SESSION_KEY);
    return false;
  }
}
function clearSession() { localStorage.removeItem(SESSION_KEY); }

function totalStats() {
  let cleared=0,perfect=0,stars=0;
  const byDifficulty={};
  for (const d of DIFFICULTIES) byDifficulty[d]={cleared:0,total:0};
  for (const item of ALL_LEVELS) {
    byDifficulty[item.difficulty].total++;
    const raw=localStorage.getItem(`bf-best-${item.id}`);
    if (raw==null) continue;
    const best=Number(raw);
    if (!Number.isFinite(best)) continue;
    cleared++;
    byDifficulty[item.difficulty].cleared++;
    const target=totalPerfectFor(item);
    const count=best<=target?3:best<=target+3?2:1;
    stars+=count;
    if (best<=target) perfect++;
  }
  return {cleared,perfect,stars,total:ALL_LEVELS.length,byDifficulty};
}
const FLOW_RANKS=[
  {at:0,name:"Starter"},
  {at:10,name:"Navigator"},
  {at:25,name:"Pathfinder"},
  {at:50,name:"Flow Master"},
  {at:75,name:"Architect"}
];
const FLOW_REWARDS=[
  {at:10,icon:"✦",name:"First Current"},
  {at:25,icon:"◆",name:"Route Reader"},
  {at:50,icon:"◎",name:"Flow Master"},
  {at:75,icon:"♛",name:"Deep Flow"}
];
function rankFor(cleared) {
  return FLOW_RANKS.filter(r=>cleared>=r.at).at(-1)?.name || "Starter";
}
function worldRunQueue() {
  return StateCore.makeWorldRunQueue(unlockedThrough());
}
function campaignSnapshot() {
  return {
    levelId:baseLevel().id,
    levelIndex:state.levelIndex,
    mode:state.mode,
    blocks:cloneBlocks(state.blocks),
    moves:state.moves,
    history:state.history.slice(-40),
    activeSwitches:[...state.activeSwitches],
    exitStep:state.exitStep,
    bossPhase:state.bossPhase,
    elapsedSeconds:state.elapsedSeconds,
    timeLeft:Number.isFinite(state.timeLeft)?state.timeLeft:null,
    lifecycle:"playing"
  };
}
function restoreCampaignSnapshot(snapshot) {
  if (!snapshot || typeof snapshot!=="object") return false;
  const index=LEVELS.findIndex(item=>item.id===snapshot.levelId);
  if (index<0 || !Array.isArray(snapshot.blocks)) return false;
  state.levelIndex=index;
  state.mode=["chill","classic","rush"].includes(snapshot.mode)?snapshot.mode:state.mode;
  state.blocks=cloneBlocks(snapshot.blocks);
  state.moves=Math.max(0,Number(snapshot.moves)||0);
  state.history=Array.isArray(snapshot.history)?snapshot.history.slice(-40):[];
  state.activeSwitches=Array.isArray(snapshot.activeSwitches)?[...snapshot.activeSwitches]:[];
  state.exitStep=Math.max(0,Number(snapshot.exitStep)||0);
  state.bossPhase=Math.max(0,Number(snapshot.bossPhase)||0);
  state.elapsedSeconds=Math.max(0,Number(snapshot.elapsedSeconds)||0);
  state.timeLeft=snapshot.timeLeft==null?Infinity:Math.max(0,Number(snapshot.timeLeft)||0);
  state.lifecycle="playing";
  state.lastResult=null;
  state.clockAnchorMs=null;
  localStorage.setItem("bf-level",String(index));
  localStorage.setItem("bf-mode",state.mode);
  return true;
}
function cancelWorldRun({restore=true}={}) {
  if (!state.run.active) return false;
  const snapshot=state.run.returnState;
  const returnIndex=Math.min(state.run.returnIndex,LEVELS.length-1);
  state.run=emptyRun();
  clearSession();
  if (restore && restoreCampaignSnapshot(snapshot)) {
    state.running=true;
    state.paused=true;
    renderAll();
    startTimer();
  } else {
    state.levelIndex=returnIndex;
    localStorage.setItem("bf-level",String(returnIndex));
    initLevel({paused:true});
  }
  return true;
}
function worldRunBestTime() {
  const raw=localStorage.getItem(`bf-run-best-time-${ACTIVE_DIFFICULTY}`);
  return raw==null?null:Number(raw);
}
function worldRunBestMoves() {
  const raw=localStorage.getItem(`bf-run-best-moves-${ACTIVE_DIFFICULTY}`);
  return raw==null?null:Number(raw);
}
function startWorldRun() {
  if (state.run.active) return;
  const queue=worldRunQueue();
  if (queue.length<5) return;
  updateRunMetric("starts");
  syncClock();
  const returnState=campaignSnapshot();
  state.run={active:true,queue,position:0,totalSeconds:0,totalMoves:0,returnIndex:state.levelIndex,returnState,complete:false};
  state.levelIndex=queue[0];
  clearSession();
  initLevel();
  resumeGame({onboarding:false});
  saveSession();
}
function finishWorldRun() {
  updateRunMetric("completions");
  const bestTime=worldRunBestTime();
  const bestMoves=worldRunBestMoves();
  if (bestTime==null || state.run.totalSeconds<bestTime) localStorage.setItem(`bf-run-best-time-${ACTIVE_DIFFICULTY}`,String(state.run.totalSeconds));
  if (bestMoves==null || state.run.totalMoves<bestMoves) localStorage.setItem(`bf-run-best-moves-${ACTIVE_DIFFICULTY}`,String(state.run.totalMoves));
  const snapshot=state.run.returnState;
  const returnIndex=Math.min(state.run.returnIndex,LEVELS.length-1);
  state.run=emptyRun();
  clearSession();
  if (restoreCampaignSnapshot(snapshot)) {
    state.running=true;
    state.paused=true;
    renderAll();
    startTimer();
  } else {
    state.levelIndex=returnIndex;
    localStorage.setItem("bf-level",String(returnIndex));
    initLevel({paused:true});
  }
  openHomeScreen();
}
function renderRunBanner() {
  const active=Boolean(state.run?.active);
  els.runBanner.classList.toggle("hidden",!active);
  if (!active) return;
  const includeCurrent=state.lifecycle==="playing";
  const totalTime=state.run.totalSeconds+(includeCurrent?state.elapsedSeconds:0);
  const totalMoves=state.run.totalMoves+(includeCurrent?state.moves:0);
  els.runBannerText.textContent=`${state.run.position+1} / ${state.run.queue.length} · ${formatTime(totalTime)} · ${totalMoves} moves`;
}
function renderHomeStats() {
  const stats=totalStats();
  els.homeProgressText.textContent=`${stats.cleared} / ${stats.total}`;
  els.homeProgressFill.style.width=`${stats.total?stats.cleared/stats.total*100:0}%`;
  els.homeCleared.textContent=stats.cleared;
  els.homePerfect.textContent=stats.perfect;
  els.homeStars.textContent=stats.stars;
  els.homeRank.textContent=rankFor(stats.cleared);
  els.rewardStrip.innerHTML=FLOW_REWARDS.map(reward=>{
    const unlocked=stats.cleared>=reward.at;
    return `<div class="reward-badge ${unlocked?"unlocked":"locked"}"><span>${unlocked?reward.icon:"⌁"}</span><strong>${reward.name}</strong><small>${unlocked?"Unlocked":`${reward.at} clears`}</small></div>`;
  }).join("");
  const runTime=worldRunBestTime(), runMoves=worldRunBestMoves();
  const unlocked=unlockedThrough();
  const canRun=unlocked>=4 && !state.run.active;
  els.worldRunBtn.disabled=!canRun;
  els.worldRunMeta.textContent=state.run.active
    ? "Run in progress"
    : unlocked<4
      ? `Unlock ${5-(unlocked+1)} more`
      : runTime==null?"Best —":`Best ${formatTime(runTime)} · ${runMoves??"—"} moves`;
  els.homeLevelsBtn.textContent=state.run.active?"Exit Run & Level Select":"Level Select";
  els.homeCurrent.textContent=state.run.active
    ? `World Run · Stage ${state.run.position+1}/${state.run.queue.length} · ${level().name}`
    : `${DIFFICULTY_LABELS[ACTIVE_DIFFICULTY]} · Level ${state.levelIndex+1} · ${level().name}`;
  els.continueBtn.textContent=state.run.active
    ? `Continue World Run · ${state.run.position+1}/${state.run.queue.length}`
    : state.moves>0?`Continue · ${state.moves} moves · ${formatTime(state.elapsedSeconds)}`:"Play";
  els.progressBreakdown.innerHTML=DIFFICULTIES.map(d=>{
    const row=stats.byDifficulty[d];
    return `<div><span>${DIFFICULTY_LABELS[d].replace(" ☠️","")}</span><strong>${row.cleared}/${row.total}</strong></div>`;
  }).join("");
}
function openHomeScreen() {
  stopClockAnchor();
  state.paused=true;
  saveSession();
  els.pause.classList.add("hidden");
  els.levelModal.classList.add("hidden");
  renderHomeStats();
  els.homeScreen.classList.remove("hidden");
  focusDialog(els.homeScreen);
}
function showCoach() {
  stopClockAnchor();
  state.paused=true;
  els.coach.classList.remove("hidden");
  focusDialog(els.coach);
}
function hideCoach() {
  localStorage.setItem("bf-onboarded","1");
  els.coach.classList.add("hidden");
  restoreDialogFocus();
  state.paused=false;
  startClockAnchor();
  showMechanicIntro();
  if (baseLevel().boss && baseLevel().phases?.length && state.moves===0 && state.elapsedSeconds===0) {
    setTimeout(showPhaseOverlay,120);
  }
}
const MECHANIC_GUIDES=[
  {key:"ice",match:/Ice/,icon:"❄",title:"Ice",text:"Enter ice and the block keeps sliding until something stops it."},
  {key:"portal",match:/Portal/,icon:"◎",title:"Portals",text:"Step onto one portal to jump to its partner. Keep the landing cell open."},
  {key:"switch",match:/Switch|Barrier/,icon:"◆",title:"Switches",text:"Touch a switch once to open its matching barrier for the rest of the puzzle."},
  {key:"oneway",match:/One-way/,icon:"→",title:"One-way tiles",text:"A block sitting on an arrow can only leave in the arrow's direction."},
  {key:"order",match:/Exit order|Order/,icon:"①",title:"Exit order",text:"The exits only accept blocks in the required sequence shown under the board."},
  {key:"long",match:/Long block/,icon:"▰",title:"Long blocks",text:"Long blocks need the entire lane to be clear, so they can become moving walls."},
  {key:"shape",match:/Irregular/,icon:"◇",title:"Shaped boards",text:"Holes create new edges — and sometimes new internal exits."}
];
function showMechanicIntro() {
  if (!state.running || state.paused) return;
  const mechanics=level().mechanics||[];
  const guide=MECHANIC_GUIDES.find(g=>mechanics.some(m=>g.match.test(m)) && localStorage.getItem(`bf-seen-mechanic-${g.key}`)!=="1");
  if (!guide) return;
  localStorage.setItem(`bf-seen-mechanic-${guide.key}`,"1");
  els.mechanicToastIcon.textContent=guide.icon;
  els.mechanicToastTitle.textContent=guide.title;
  els.mechanicToastText.textContent=guide.text;
  els.mechanicToast.classList.remove("hidden");
  clearTimeout(mechanicToastTimer);
  mechanicToastTimer=setTimeout(()=>els.mechanicToast.classList.add("hidden"),4200);
}
function resumeGame({onboarding=true}={}) {
  els.homeScreen.classList.add("hidden");
  els.pause.classList.add("hidden");
  restoreDialogFocus();
  if (state.lifecycle==="run-stage-complete" && state.lastResult) {
    state.paused=true;
    showStoredResult();
    return;
  }
  if (state.lifecycle==="failed") {
    state.paused=true;
    els.fail.classList.remove("hidden");
    focusDialog(els.fail);
    return;
  }
  state.paused=false;
  startClockAnchor();
  saveSession();
  if (onboarding && localStorage.getItem("bf-onboarded")!=="1") showCoach();
  else {
    showMechanicIntro();
    if (baseLevel().boss && baseLevel().phases?.length && state.moves===0 && state.elapsedSeconds===0) {
      setTimeout(showPhaseOverlay,120);
    }
  }
}
function openPauseMenu() {
  if (!state.running) return;
  clearDragVisual();
  stopClockAnchor();
  state.paused=true;
  saveSession();
  els.pauseLevelsBtn.textContent=state.run.active?"Exit Run & Level Select":"Level Select";
  els.pause.classList.remove("hidden");
  focusDialog(els.pause);
}
function closePauseMenu() {
  els.pause.classList.add("hidden");
  restoreDialogFocus();
  state.paused=false;
  startClockAnchor();
  saveSession();
}
function restartLevel() {
  updateLevelMetric(baseLevel().id,"restarts");
  clearSession();
  state.lifecycle="playing";
  state.lastResult=null;
  initLevel();
  state.paused=false;
  els.pause.classList.add("hidden");
  els.win.classList.add("hidden");
  els.fail.classList.add("hidden");
  restoreDialogFocus();
  showMechanicIntro();
}
function transitionToLevel(action) {
  if (REDUCE_MOTION || !els.boardFrame?.animate) { action(); return; }
  state.paused=true;
  const out=els.boardFrame.animate([
    {opacity:1,transform:"scale(1) translateY(0)"},
    {opacity:0,transform:"scale(.965) translateY(8px)"}
  ],{duration:135,easing:"ease-in"});
  out.finished.then(()=>{
    action();
    els.boardFrame.animate([
      {opacity:0,transform:"scale(.97) translateY(-8px)"},
      {opacity:1,transform:"scale(1) translateY(0)"}
    ],{duration:210,easing:"cubic-bezier(.2,.8,.2,1)"});
  }).catch(()=>action());
}
function showPhaseOverlay() {
  const base=baseLevel();
  const active=level();
  if (!base?.phases?.length) return;
  els.phaseOverlayKicker.textContent="BOSS PHASE";
  els.phaseOverlayTitle.textContent=`Phase ${state.bossPhase+1} / ${base.phases.length} · ${active.label || ""}`;
  els.phaseOverlayText.textContent=active.intro || "New blocks entering the board.";
  els.phaseOverlay.classList.remove("hidden");
  clearTimeout(showPhaseOverlay.timer);
  showPhaseOverlay.timer=setTimeout(()=>els.phaseOverlay.classList.add("hidden"),1150);
}
function advanceBossPhase() {
  const base=baseLevel();
  if (!base?.phases?.length || state.bossPhase>=base.phases.length-1) return false;
  state.phaseTransitioning=true;
  clearDragVisual();

  // Commit the next phase immediately so a refresh during the animation can never
  // restore an empty completed phase.
  state.bossPhase++;
  state.blocks=cloneBlocks(level().blocks);
  state.activeSwitches=[];
  state.exitStep=0;
  state.history=[];
  state.lifecycle="playing";
  state.lastResult=null;
  saveSession();

  const reveal=()=>{
    renderAll();
    showPhaseOverlay();
    playTone(900+state.bossPhase*120);
    buzz([14,24,14]);
    setTimeout(()=>{
      state.phaseTransitioning=false;
      saveSession();
    },420);
  };
  if (REDUCE_MOTION || !els.boardFrame?.animate) {
    reveal();
    return true;
  }
  els.boardFrame.animate([
    {opacity:1,transform:"scale(1)"},
    {opacity:.12,transform:"scale(.94)"}
  ],{duration:170,easing:"ease-in"}).finished.then(()=>{
    reveal();
    els.boardFrame.animate([
      {opacity:.12,transform:"scale(1.055)"},
      {opacity:1,transform:"scale(1)"}
    ],{duration:300,easing:"cubic-bezier(.2,.85,.2,1)"});
  }).catch(reveal);
  return true;
}

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

function initLevel(options={}) {
  clearInterval(state.timerId);
  stopClockAnchor();
  const restored=Boolean(options.restore && restoreSession());
  if (!restored) {
    updateLevelMetric(baseLevel().id,"starts");
    state.moves = 0;
    state.history = [];
    state.activeSwitches = [];
    state.exitStep = 0;
    state.bossPhase = 0;
    state.phaseTransitioning = false;
    state.blocks = cloneBlocks(level().blocks);
    state.elapsedSeconds = 0;
    state.timeLeft = state.mode === "rush" ? Math.max(14, Math.floor(timeTargetFor(baseLevel()) * .62)) : Infinity;
    state.lifecycle="playing";
    state.lastResult=null;
  }
  state.clockAnchorMs=null;
  state.paused = Boolean(options.paused);
  state.running = state.lifecycle==="playing";
  els.win.classList.add("hidden");
  els.fail.classList.add("hidden");
  renderAll();
  if (!restored) saveSession();

  if (state.lifecycle==="run-stage-complete" && state.lastResult) {
    state.running=false;
    showStoredResult();
    return;
  }
  if (state.lifecycle==="failed") {
    state.running=false;
    els.fail.classList.remove("hidden");
    focusDialog(els.fail);
    return;
  }
  startTimer();
}

function handleRushExpiry() {
  if (!state.running || state.mode!=="rush" || state.timeLeft>0) return;
  stopClockAnchor();
  state.running=false;
  state.lifecycle="failed";
  state.lastResult=null;
  clearInterval(state.timerId);
  if (state.run.active) saveSession(); else clearSession();
  els.fail.classList.remove("hidden");
  focusDialog(els.fail);
  buzz([50,35,90]);
}
function startTimer() {
  clearInterval(state.timerId);
  lastAutosaveSecond=state.elapsedSeconds;
  renderClock();
  if (!state.running) return;
  startClockAnchor();
  state.timerId=setInterval(()=>{
    if (!state.running || state.paused) return;
    const changed=syncClock();
    if (!changed) return;
    renderClock();
    if (state.mode==="rush" && state.timeLeft<=0) {
      handleRushExpiry();
      return;
    }
    if (RuntimeCore.shouldAutosave(lastAutosaveSecond,state.elapsedSeconds,5)) {
      lastAutosaveSecond=state.elapsedSeconds;
      saveSession();
    }
  },250);
}

function renderAll() {
  const l = level();
  els.title.textContent = baseLevel().boss
    ? `Boss · ${baseLevel().name}`
    : `Level ${state.levelIndex + 1} · ${l.name}`;
  const req = nextExitRequirement();
  const phaseLead=baseLevel().boss && l.intro ? `${l.label}: ${l.intro}` : l.hint;
  els.hint.textContent = req ? `${phaseLead}  Next out: ${req.toUpperCase()}.` : phaseLead;
  els.moves.textContent = state.moves;
  els.par.textContent = totalPerfectFor(baseLevel());
  els.timeLabel.textContent = state.mode==="rush" ? "Left" : "Time";
  els.timer.textContent = state.mode==="rush" ? formatTime(state.timeLeft) : formatTime(state.elapsedSeconds);
  els.modeExplainer.textContent = state.mode==="chill"
    ? "No pressure · solve time still recorded."
    : state.mode==="classic"
      ? `Beat the target without a fail state · ${formatTime(timeTargetFor(baseLevel()))}.`
      : `Countdown pressure · ${formatTime(Math.max(14,Math.floor(timeTargetFor(baseLevel())*.62)))} on a fresh run.`;
  els.bossBadge.classList.toggle("hidden",!baseLevel().boss);
  els.bossBadge.textContent=baseLevel().boss && baseLevel().phases?.length
    ? `BOSS · PHASE ${state.bossPhase+1}/${baseLevel().phases.length}`
    : "BOSS";
  document.body.classList.toggle("boss-level",Boolean(baseLevel().boss));
  renderRunBanner();
  els.progressText.textContent = `${state.levelIndex + 1} / ${LEVELS.length}`;
  els.progressFill.style.width = `${((state.levelIndex + 1) / LEVELS.length) * 100}%`;
  els.accessibility.classList.toggle("on", state.colorblind);
  els.accessibility.setAttribute("aria-pressed",state.colorblind?"true":"false");
  els.sound.classList.toggle("on", state.sound);
  els.sound.setAttribute("aria-pressed",state.sound?"true":"false");
  document.querySelectorAll(".mode-chip").forEach(b => {
    const active=b.dataset.mode===state.mode;
    b.classList.toggle("active",active);
    b.setAttribute("aria-pressed",active?"true":"false");
  });
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
    d.tabIndex=0;
    d.setAttribute("role","button");
    d.setAttribute("aria-keyshortcuts","ArrowUp ArrowDown ArrowLeft ArrowRight");
    d.setAttribute("aria-label", `${b.color} block. Drag it, or use the arrow keys to move.`);
    d.style.background = COLORS[b.color];
    place(d,b.x,b.y,b.w||1,b.h||1);
    attachSwipe(d,b.id);
    attachKeyboard(d,b.id);
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
function attachKeyboard(el,id) {
  el.addEventListener("keydown",event=>{
    const dir={
      ArrowUp:"up",
      ArrowDown:"down",
      ArrowLeft:"left",
      ArrowRight:"right"
    }[event.key];
    if (!dir || !state.running || state.paused || state.phaseTransitioning) return;
    event.preventDefault();
    attemptMove(id,dir);
    requestAnimationFrame(()=>blockElement(id)?.focus());
  });
}
function attachSwipe(el,id) {
  el.addEventListener("pointerdown", e => {
    if (!state.running || state.paused || state.phaseTransitioning) return;
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
  if (!dragSession || e.pointerId!==dragSession.pointerId || !state.running || state.paused || state.phaseTransitioning) return;
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
  if (!state.running || state.paused || session.moved) return;
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
  if (state.phaseTransitioning) return false;
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
    if (state.running && !state.phaseTransitioning && state.blocks.length) saveSession();
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
  if (state.running && !state.phaseTransitioning && state.blocks.length) saveSession();
  return true;
}

function undo() {
  if (!state.running || state.paused || state.phaseTransitioning || !state.history.length) return;
  updateLevelMetric(baseLevel().id,"undos");
  const prev=state.history.pop();
  state.blocks=prev.blocks; state.moves=prev.moves; state.activeSwitches=prev.activeSwitches; state.exitStep=prev.exitStep;
  renderAll();
  saveSession();
}
function showStoredResult() {
  const result=state.lastResult;
  if (!result) return;
  els.stars.textContent=result.stars;
  els.winTitle.textContent=result.title;
  els.nextBtn.textContent=result.nextText;
  els.winSummary.textContent=result.summary;
  els.yourMoves.textContent=result.moves;
  els.perfectMoves.textContent=result.target;
  els.yourTime.textContent=result.yourTime;
  els.bestTime.textContent=result.bestTime;
  els.resultCallout.textContent=result.callout||"";
  els.resultCallout.classList.toggle("hidden",!result.callout);
  els.replayBtn.hidden=!result.replayAllowed;
  els.win.classList.remove("hidden");
  focusDialog(els.win);
}

function checkWin() {
  if (state.blocks.length || !state.running) return;
  if (advanceBossPhase()) return;

  stopClockAnchor();
  state.running=false;
  clearInterval(state.timerId);
  const target=totalPerfectFor(baseLevel()), delta=state.moves-target;
  const starCount=delta<=0?3:delta<=3?2:1;
  const solvedTime=Math.max(1,state.elapsedSeconds);
  const targetTime=timeTargetFor(baseLevel());
  const bestKey=`bf-best-${baseLevel().id}`;
  const timeKey=`bf-best-time-${baseLevel().id}`;
  const oldBestRaw=localStorage.getItem(bestKey);
  const oldTimeRaw=localStorage.getItem(timeKey);
  const oldBest=oldBestRaw==null?Infinity:Number(oldBestRaw);
  const oldTime=oldTimeRaw==null?Infinity:Number(oldTimeRaw);
  const newMoveBest=state.moves<oldBest;
  const newTimeBest=solvedTime<oldTime;
  const inRun=state.run.active;
  updateLevelMetric(baseLevel().id,"completions");
  updateLevelMetric(baseLevel().id,"totalSeconds",solvedTime);
  updateLevelMetric(baseLevel().id,"totalMoves",state.moves);

  if (!inRun && newMoveBest) localStorage.setItem(bestKey,String(state.moves));
  if (!inRun && newTimeBest) localStorage.setItem(timeKey,String(solvedTime));

  if (inRun) {
    state.run.totalSeconds+=solvedTime;
    state.run.totalMoves+=state.moves;
    state.run.complete=state.run.position>=state.run.queue.length-1;
  }

  const callouts=[];
  if (!inRun && newTimeBest) callouts.push("NEW BEST TIME");
  if (!inRun && newMoveBest) callouts.push("NEW BEST MOVES");
  if (state.mode==="classic" && solvedTime<=targetTime) callouts.push("CLASSIC TARGET BEAT");
  if (state.mode==="rush") callouts.push("RUSH CLEARED");
  if (baseLevel().boss) callouts.push("BOSS DOWN");
  if (inRun) callouts.push(state.run.complete?"5-STAGE RUN COMPLETE":`RUN STAGE ${state.run.position+1}/${state.run.queue.length}`);

  const bestTimeText=inRun
    ? (oldTimeRaw==null?"—":formatTime(oldTime))
    : formatTime(Math.min(oldTime,solvedTime));

  state.lastResult={
    stars:"★".repeat(starCount)+"☆".repeat(3-starCount),
    title:inRun
      ? (state.run.complete?"World Run complete.":`Stage ${state.run.position+1} cleared.`)
      : baseLevel().boss ? "Boss defeated." : "Nice work.",
    nextText:inRun ? (state.run.complete?"Finish Run":"Next Stage") : "Next Level",
    summary:inRun
      ? `${state.run.totalMoves} total moves · ${formatTime(state.run.totalSeconds)} total.`
      : baseLevel().boss
        ? `Boss cleared · ${state.moves} moves · ${formatTime(solvedTime)}.`
        : delta<=0
          ? `Perfect flow · ${formatTime(solvedTime)}.`
          : `Cleared in ${state.moves} moves · ${formatTime(solvedTime)}.`,
    moves:state.moves,
    target,
    yourTime:formatTime(solvedTime),
    bestTime:bestTimeText,
    callout:callouts.join(" · "),
    replayAllowed:!inRun,
    solvedTime
  };
  state.lifecycle=inRun?"run-stage-complete":"level-complete";
  showStoredResult();

  if (!inRun) {
    localStorage.setItem(`bf-complete-${ACTIVE_DIFFICULTY}-${state.levelIndex}`,"1");
    unlockLevel(state.levelIndex+1);
    clearSession();
  } else {
    saveSession();
  }
  renderHomeStats();
  celebrateWin();
  playTone(980); setTimeout(()=>playTone(1180),90); setTimeout(()=>playTone(1380),180); buzz([18,40,18]);
}
function nextLevel() {
  els.win.classList.add("hidden");
  restoreDialogFocus();
  state.lastResult=null;
  state.lifecycle="playing";
  if (state.run.active) {
    if (state.run.complete) {
      finishWorldRun();
      return;
    }
    transitionToLevel(()=>{
      state.run.position++;
      state.levelIndex=state.run.queue[state.run.position];
      initLevel();
      state.paused=false;
      showMechanicIntro();
      saveSession();
    });
    return;
  }
  clearSession();
  transitionToLevel(()=>{
    state.levelIndex = state.levelIndex < LEVELS.length-1 ? state.levelIndex+1 : 0;
    localStorage.setItem("bf-level",String(state.levelIndex));
    initLevel();
    state.paused=false;
    showMechanicIntro();
  });
}
function setMode(mode) {
  if (state.run.active) cancelWorldRun();
  state.mode=mode;
  localStorage.setItem("bf-mode",mode);
  clearSession();
  initLevel();
  showMechanicIntro();
}
function buzz(pattern) { if (navigator.vibrate) navigator.vibrate(pattern); }
let audioContext=null;
function playTone(freq) {
  if (!state.sound) return;
  try {
    const AC=window.AudioContext||window.webkitAudioContext;
    if (!AC) return;
    audioContext ||= new AC();
    if (audioContext.state==="suspended") audioContext.resume?.();
    const osc=audioContext.createOscillator(), gain=audioContext.createGain();
    osc.type="sine";
    osc.frequency.value=freq;
    gain.gain.setValueAtTime(.025,audioContext.currentTime);
    gain.gain.exponentialRampToValueAtTime(.0001,audioContext.currentTime+.08);
    osc.connect(gain);
    gain.connect(audioContext.destination);
    osc.start();
    osc.stop(audioContext.currentTime+.08);
  } catch (_) {}
}

document.getElementById("pauseBtn").addEventListener("click",openPauseMenu);
document.getElementById("closeLevelsBtn").addEventListener("click",closeLevelSelect);
els.levelModal.addEventListener("click",event=>{ if(event.target===els.levelModal) closeLevelSelect(); });
document.getElementById("continueBtn").addEventListener("click",()=>resumeGame());
els.homeLevelsBtn.addEventListener("click",()=>openLevelSelect("home"));
els.worldRunBtn.addEventListener("click",startWorldRun);
els.copyPlaytestBtn?.addEventListener("click",copyPlaytestReport);
document.getElementById("resumeBtn").addEventListener("click",closePauseMenu);
els.pauseLevelsBtn.addEventListener("click",()=>openLevelSelect("pause"));
document.getElementById("pauseRestartBtn").addEventListener("click",restartLevel);
document.getElementById("pauseHomeBtn").addEventListener("click",openHomeScreen);
document.getElementById("coachDoneBtn").addEventListener("click",hideCoach);
document.getElementById("mechanicToastClose").addEventListener("click",()=>els.mechanicToast.classList.add("hidden"));
document.getElementById("undoBtn").addEventListener("click",undo);
document.getElementById("resetBtn").addEventListener("click",restartLevel);
document.getElementById("nextBtn").addEventListener("click",nextLevel);
document.getElementById("replayBtn").addEventListener("click",()=>{els.win.classList.add("hidden");restartLevel();});
document.getElementById("retryBtn").addEventListener("click",()=>{els.fail.classList.add("hidden");restartLevel();});
document.getElementById("switchChillBtn").addEventListener("click",()=>setMode("chill"));
document.querySelectorAll(".mode-chip").forEach(b=>b.addEventListener("click",()=>setMode(b.dataset.mode)));
els.accessibility.addEventListener("click",()=>{state.colorblind=!state.colorblind;localStorage.setItem("bf-colorblind",state.colorblind?"1":"0");renderAll();saveSession();});
els.sound.addEventListener("click",()=>{state.sound=!state.sound;localStorage.setItem("bf-sound",state.sound?"1":"0");renderAll();saveSession();});
document.addEventListener("keydown",event=>{
  trapDialogFocus(event);
  if (event.key!=="Escape") return;
  if (!els.levelModal.classList.contains("hidden")) {
    event.preventDefault();
    closeLevelSelect();
  } else if (!els.pause.classList.contains("hidden")) {
    event.preventDefault();
    closePauseMenu();
  } else if (!els.coach.classList.contains("hidden")) {
    event.preventDefault();
    hideCoach();
  }
});
document.addEventListener("visibilitychange",()=>{
  if (document.hidden) {
    stopClockAnchor();
    saveSession();
  } else if (state.running && !state.paused) {
    startClockAnchor();
    renderClock();
  }
});
window.addEventListener("pagehide",()=>{
  stopClockAnchor();
  saveSession();
});
window.addEventListener("pageshow",()=>{
  if (state.running && !state.paused) {
    startClockAnchor();
    renderClock();
  }
});

function reportClientError(error) {
  try {
    const message=String(error?.message || error || "Unknown client error").slice(0,240);
    localStorage.setItem("bf-last-error",JSON.stringify({
      message,
      at:new Date().toISOString(),
      level:baseLevel()?.id || null,
      phase:state.bossPhase,
      mode:state.mode,
      run:Boolean(state.run?.active)
    }));
    if (els.mechanicToast && !state.paused) {
      els.mechanicToastIcon.textContent="!";
      els.mechanicToastTitle.textContent="Progress saved";
      els.mechanicToastText.textContent="Something glitched. Your current puzzle state was saved so you can safely reopen the game.";
      els.mechanicToast.classList.remove("hidden");
    }
  } catch (_) {}
}
window.addEventListener("error",event=>reportClientError(event.error || event.message));
window.addEventListener("unhandledrejection",event=>reportClientError(event.reason));

migrateStorageV4();
initLevel({restore:true,paused:true});
openHomeScreen();
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
