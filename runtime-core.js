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

  function dragIntent({dx=0,dy=0,cw=1,ch=1,axis=null,lastDir=null,lastStepAt=0,nowMs=0,threshold=.62,cooldownMs=75,dominance=1.15}={}) {
    const nx=Math.abs(Number(dx)||0)/Math.max(1,Number(cw)||1);
    const ny=Math.abs(Number(dy)||0)/Math.max(1,Number(ch)||1);
    let nextAxis=null;
    if (nx>ny*dominance) nextAxis="x";
    else if (ny>nx*dominance) nextAxis="y";
    else nextAxis=axis;
    if (!nextAxis) return {ready:false,reanchor:false,axis:null,dir:null};
    const amount=nextAxis==="x"?nx:ny;
    const dir=nextAxis==="x"?(dx>=0?"right":"left"):(dy>=0?"down":"up");
    if ((axis && nextAxis!==axis) || (lastDir && dir!==lastDir)) {
      return {ready:false,reanchor:true,axis:nextAxis,dir};
    }
    if (amount<threshold) return {ready:false,reanchor:false,axis:nextAxis,dir};
    if (lastStepAt && nowMs-lastStepAt<cooldownMs) return {ready:false,reanchor:false,axis:nextAxis,dir};
    return {ready:true,reanchor:false,axis:nextAxis,dir};
  }

  globalThis.BlockFlowRuntime={consumeClock,applyElapsed,shouldAutosave,dragIntent};
})();
