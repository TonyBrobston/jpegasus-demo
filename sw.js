importScripts('/cache-polyfill.js');


self.addEventListener('install', function(e) {
    e.waitUntil(
        caches.open('jpegasus').then(function(cache) {
            return cache.addAll([
                '/',
                '/index.html',
                '/css/styles.css',
                '/img/jpegasus-logo.png',
                'jpegasus-logo-reversed.png',
                '/js/main.js'
            ]);
        })
    );
});
