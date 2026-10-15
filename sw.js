const CACHE_NAME = 'brainboost-v2';
const urlsToCache = [
  './',
  './index.html',
  './css/styles.css',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png',
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

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
