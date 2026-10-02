import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";

const context={localStorage:{getItem:()=>null},console};
vm.createContext(context);
const levelsSource=fs.readFileSync(new URL("../levels.js",import.meta.url),"utf8");
const coreSource=fs.readFileSync(new URL("../state-core.js",import.meta.url),"utf8");
vm.runInContext(`${levelsSource}\n${coreSource}\nglobalThis.__levels=ALL_LEVELS;`,context);
const levels=context.__levels;
const Core=context.BlockFlowState;

assert.equal(Core.SESSION_VERSION,4);
const gateRelay=levels.find(level=>level.name==="Gate Relay");
assert.ok(gateRelay?.boss);
assert.equal(Core.totalPerfectFor(gateRelay),gateRelay.bossPar);
assert.notEqual(gateRelay.par,gateRelay.bossPar);

const runningState={levelIndex:18,run:{active:true,returnIndex:2}};
assert.equal(Core.unlockedThrough(2,runningState,19),2,"World Run index must not unlock campaign levels");
assert.deepEqual([...Core.makeWorldRunQueue(4)],[0,1,2,3,4]);
assert.deepEqual([...Core.makeWorldRunQueue(3)],[]);
assert.ok(Math.max(...Core.makeWorldRunQueue(18))<=18);

const first=levels[0];
const goodPlaying={
  version:4,
  lifecycle:"playing",
  levelId:first.id,
  bossPhase:0,
  blocks:first.blocks.map(block=>({...block})),
  run:{active:false}
};
assert.equal(Core.sessionCompatible(goodPlaying,levels),true);
assert.equal(Core.sessionCompatible({...goodPlaying,version:3},levels),false,"legacy sessions must be rejected");
assert.equal(Core.sessionCompatible({...goodPlaying,blocks:[]},levels),false,"empty playing boards must not restore");

const queue=[0,1,2,3,4];
const completedRun={
  version:4,
  lifecycle:"run-stage-complete",
  levelId:first.id,
  bossPhase:0,
  blocks:[],
  lastResult:{title:"Stage cleared"},
  run:{active:true,queue,position:0,totalSeconds:10,totalMoves:5,returnIndex:0,complete:false}
};
assert.equal(Core.sessionCompatible(completedRun,levels),true,"completed World Run stage must restore safely");
assert.equal(Core.sessionCompatible({...completedRun,lastResult:null},levels),false,"completed run stages need a stored result screen");

const boss=levels.find(level=>level.phases?.length);
assert.ok(boss);
const phase=Core.activeLayout(boss,0);
const goodBoss={
  version:4,
  lifecycle:"playing",
  levelId:boss.id,
  bossPhase:0,
  blocks:phase.blocks.map(block=>({...block})),
  run:{active:false}
};
assert.equal(Core.sessionCompatible(goodBoss,levels),true);
assert.equal(Core.sessionCompatible({...goodBoss,blocks:[{id:"not-in-this-phase",x:0,y:0}]},levels),false,"wrong-phase blocks must be rejected");
assert.equal(Core.sessionCompatible({...goodBoss,bossPhase:99},levels),false);

console.log("Block Flow state regression tests passed.");
