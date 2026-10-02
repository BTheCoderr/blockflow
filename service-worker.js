const CACHE = "block-flow-v16";
const ASSETS = ["./","./index.html","./styles.css?v=16","./difficulty.css?v=16","./levels.js?v=16","./difficulty.js?v=16","./state-core.js?v=16","./runtime-core.js?v=16","./app.js?v=16","./manifest.webmanifest","./icon-192.png","./icon-512.png","./support.html","./privacy.html"];
self.addEventListener("install", event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS)));
  self.skipWaiting();
});
self.addEventListener("activate", event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))));
  self.clients.claim();
});
self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return;
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;
  event.respondWith(
    fetch(event.request).then(response => {
      const copy = response.clone();
      caches.open(CACHE).then(cache => cache.put(event.request, copy));
      return response;
    }).catch(() => caches.match(event.request).then(hit => hit || (event.request.mode === "navigate" ? caches.match("./index.html") : Promise.reject())))
  );
});
