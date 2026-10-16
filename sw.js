const CACHE_NAME = 'brainboost-v3';
const urlsToCache = [
  './',
  './index.html',
  './css/styles.css',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './js/topic_shortcuts.js',
  './js/data.js',
  './js/mpsc_gs_data.js',
  './js/gs_history.js',
  './js/gs_geography.js',
  './js/gs_economy.js',
  './js/gs_polity.js',
  './js/gs_science.js',
  './js/gs_tricks.js',
  './js/gs_flashcards.js',
  './js/exam_patterns_data.js',
  './js/curated_exam_questions.js',
  './js/app.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Network-first strategy for instant development updates & offline fallback
self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request)
      .then(networkResponse => {
        if (networkResponse && networkResponse.status === 200 && event.request.method === 'GET') {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, responseToCache);
          });
        }
        return networkResponse;
      })
      .catch(() => caches.match(event.request))
  );
});

