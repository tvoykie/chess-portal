const CACHE_NAME = 'chess-portal-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/play.html',
  '/reviews.html',
  '/feedback.html',
  '/todolist.html',
  '/css/style.css',
  '/js/todolist.js',
  '/icons/icon-72x72.png',
  '/icons/icon-192x192.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});