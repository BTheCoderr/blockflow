import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";

const source=fs.readFileSync(new URL("../runtime-core.js",import.meta.url),"utf8");
const context={};
vm.createContext(context);
vm.runInContext(source,context);
const Runtime=context.BlockFlowRuntime;

assert.deepEqual(Runtime.consumeClock(1000,3500,true),{seconds:2,anchorMs:3000});
assert.deepEqual(Runtime.consumeClock(1000,3500,false),{seconds:0,anchorMs:1000});
assert.deepEqual(Runtime.consumeClock(0,3500,true),{seconds:0,anchorMs:0});

assert.deepEqual(Runtime.applyElapsed({elapsedSeconds:10,timeLeft:30,mode:"rush"},4),{elapsedSeconds:14,timeLeft:26});
assert.deepEqual(Runtime.applyElapsed({elapsedSeconds:10,timeLeft:Infinity,mode:"chill"},4),{elapsedSeconds:14,timeLeft:Infinity});
assert.equal(Runtime.shouldAutosave(4,5,5),true);
assert.equal(Runtime.shouldAutosave(5,9,5),false);
assert.equal(Runtime.shouldAutosave(9,10,5),true);

console.log("Block Flow runtime regression tests passed.");
