importScripts('/jpegasus-demo/cache-polyfill.js');

self.addEventListener('install', function(e) {
    e.waitUntil(
        caches.open('jpegasus').then(function(cache) {
            return cache.addAll([
                '/jpegasus-demo/',
                '/jpegasus-demo/index.html',
                '/jpegasus-demo/css/styles.css',
                '/jpegasus-demo/img/jpegasus-logo-reversed.png',
                '/jpegasus-demo/js/main.js'
            ]);
        })
    );
});

self.addEventListener('fetch', function(event) {
    console.log(event.request.url);

    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});
