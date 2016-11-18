const VERSION = '1';

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('my cache').then((cache) => {
      return cache.addAll([
        '/',
        '/img.jpg'
      ]);
    }).then(() => {
        return self.skipWaiting();
    })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

/*
self.addEventListener('fetch', (event) => {
  event.respondWith(
      new Response("<h1>DevFest Сибирь 2016!</h1>", {
        headers: {'Content-Type': 'text/html'}
      })
  );
});*/
