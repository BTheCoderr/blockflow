(() => {
  function consumeClock(anchorMs,nowMs,active=true) {
    const anchor=Number(anchorMs)||0;
    const now=Number(nowMs)||0;
    if (!active || !anchor || now<=anchor) return {seconds:0,anchorMs:anchor};
    const seconds=Math.floor((now-anchor)/1000);
    if (seconds<1) return {seconds:0,anchorMs:anchor};
    return {seconds,anchorMs:anchor+seconds*1000};
  }

  function applyElapsed({elapsedSeconds=0,timeLeft=Infinity,mode="chill"},seconds=0) {
    const delta=Math.max(0,Math.trunc(Number(seconds)||0));
    const nextElapsed=Math.max(0,Number(elapsedSeconds)||0)+delta;
    const nextTimeLeft=mode==="rush"
      ? Math.max(0,(Number.isFinite(Number(timeLeft))?Number(timeLeft):0)-delta)
      : timeLeft;
    return {elapsedSeconds:nextElapsed,timeLeft:nextTimeLeft};
  }

  function shouldAutosave(previousSecond,currentSecond,interval=5) {
    const previous=Math.max(0,Math.floor(Number(previousSecond)||0));
    const current=Math.max(0,Math.floor(Number(currentSecond)||0));
    const every=Math.max(1,Math.floor(Number(interval)||5));
    return Math.floor(current/every)>Math.floor(previous/every);
  }

  globalThis.BlockFlowRuntime={consumeClock,applyElapsed,shouldAutosave};
})();
