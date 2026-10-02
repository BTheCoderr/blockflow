import assert from "node:assert/strict";
import fs from "node:fs";

const read=path=>fs.readFileSync(new URL(`../${path}`,import.meta.url),"utf8");
const app=read("app.js");
const core=read("state-core.js");
const difficulty=read("difficulty.js");
const index=read("index.html");
const sw=read("service-worker.js");
const manifest=JSON.parse(read("manifest.webmanifest"));
const vercel=JSON.parse(read("vercel.json"));

new Function(app);
new Function(core);
new Function(difficulty);

const ids=[...app.matchAll(/getElementById\("([^"]+)"\)/g)].map(match=>match[1]);
const missing=[...new Set(ids)].filter(id=>!index.includes(`id="${id}"`));
assert.deepEqual(missing,[],"Every JavaScript element reference must exist in index.html");

const appVersion=Number(index.match(/app\.js\?v=(\d+)/)?.[1]);
const coreVersion=Number(index.match(/state-core\.js\?v=(\d+)/)?.[1]);
const cacheVersion=Number(sw.match(/block-flow-v(\d+)/)?.[1]);
assert.ok(appVersion && appVersion===coreVersion && appVersion===cacheVersion,"HTML and service-worker asset versions must match");
assert.ok(sw.includes(`state-core.js?v=${appVersion}`),"state-core must be cached offline");

const patternMatch=app.match(/const PATTERNS = \{([^}]+)\}/);
assert.ok(patternMatch,"Colorblind pattern map must exist");
const patterns=[...patternMatch[1].matchAll(/:"([^"]+)"/g)].map(match=>match[1]);
assert.equal(new Set(patterns).size,5,"Every block color needs a unique non-color pattern");

assert.ok(app.includes("bf-session-v4-"),"Current save schema must use v4");
assert.ok(app.includes('addEventListener("unhandledrejection"'),"Unhandled promise errors must be captured");
assert.ok(app.includes('aria-keyshortcuts'),"Blocks must expose keyboard move shortcuts");
assert.ok(app.includes("cancelWorldRun"),"World Run cancellation guard must exist");

assert.equal(manifest.id,"./");
assert.equal(manifest.icons?.length,2);
for (const icon of manifest.icons) {
  assert.ok(fs.existsSync(new URL(`../${icon.src}`,import.meta.url)),`Missing manifest icon ${icon.src}`);
  assert.ok(icon.purpose.includes("maskable"),"Install icons must be maskable");
}

const headers=vercel.headers?.flatMap(rule=>rule.headers||[])||[];
assert.ok(headers.some(h=>h.key==="Content-Security-Policy"),"Production CSP header is required");
assert.ok(headers.some(h=>h.key==="X-Content-Type-Options" && h.value==="nosniff"),"nosniff header is required");

console.log("Block Flow app validation passed.");
