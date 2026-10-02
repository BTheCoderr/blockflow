(() => {
  const SESSION_VERSION = 4;
  const LIFECYCLES = new Set(["playing","run-stage-complete","failed"]);

  function totalPerfectFor(item) {
    return Number(item?.bossPar ?? item?.par ?? 0);
  }

  function campaignIndex(state) {
    if (state?.run?.active) return Math.max(0, Number(state.run.returnIndex) || 0);
    return Math.max(0, Number(state?.levelIndex) || 0);
  }

  function unlockedThrough(stored, state, count) {
    const maxIndex=Math.max(0,(Number(count)||1)-1);
    return Math.max(0,Math.min(maxIndex,Math.max(Number(stored)||0,campaignIndex(state))));
  }

  function makeWorldRunQueue(lastUnlocked) {
    const last=Math.max(0,Number(lastUnlocked)||0);
    if (last < 4) return [];
    return [...new Set([0,Math.round(last*.25),Math.round(last*.5),Math.round(last*.75),last])];
  }

  function sanitizeRun(run,count) {
    if (!run?.active) return {active:false,queue:[],position:0,totalSeconds:0,totalMoves:0,returnIndex:0,returnState:null,complete:false};
    const maxIndex=Math.max(0,(Number(count)||1)-1);
    const queue=(Array.isArray(run.queue)?run.queue:[])
      .map(Number)
      .filter(Number.isFinite)
      .map(n=>Math.max(0,Math.min(maxIndex,Math.trunc(n))));
    const unique=[...new Set(queue)];
    if (!unique.length) return null;
    const position=Math.max(0,Math.min(unique.length-1,Number(run.position)||0));
    return {
      active:true,
      queue:unique,
      position,
      totalSeconds:Math.max(0,Number(run.totalSeconds)||0),
      totalMoves:Math.max(0,Number(run.totalMoves)||0),
      returnIndex:Math.max(0,Math.min(maxIndex,Number(run.returnIndex)||0)),
      returnState:run.returnState && typeof run.returnState==="object" ? run.returnState : null,
      complete:Boolean(run.complete)
    };
  }

  function activeLayout(item,bossPhase=0) {
    const phase=item?.phases?.[Math.max(0,Number(bossPhase)||0)];
    return phase ? {...item,...phase,phases:item.phases,boss:true} : item;
  }

  function sessionCompatible(saved,levels) {
    if (!saved || saved.version !== SESSION_VERSION || !Array.isArray(levels)) return false;
    if (!LIFECYCLES.has(saved.lifecycle || "playing")) return false;
    const index=levels.findIndex(item=>item.id===saved.levelId);
    if (index<0 || !Array.isArray(saved.blocks)) return false;
    const item=levels[index];
    const phase=Math.max(0,Number(saved.bossPhase)||0);
    if (item.phases?.length && phase>=item.phases.length) return false;
    if (!item.phases?.length && phase!==0) return false;
    const layout=activeLayout(item,phase);
    const allowedIds=new Set((layout?.blocks||[]).map(b=>b.id));
    if (saved.blocks.some(b=>!b || !allowedIds.has(b.id))) return false;
    const lifecycle=saved.lifecycle || "playing";
    if (lifecycle==="playing" && saved.blocks.length===0) return false;
    if (lifecycle==="run-stage-complete" && !saved.run?.active) return false;
    if (saved.run?.active && !sanitizeRun(saved.run,levels.length)) return false;
    return true;
  }

  globalThis.BlockFlowState={
    SESSION_VERSION,
    totalPerfectFor,
    campaignIndex,
    unlockedThrough,
    makeWorldRunQueue,
    sanitizeRun,
    activeLayout,
    sessionCompatible
  };
})();
