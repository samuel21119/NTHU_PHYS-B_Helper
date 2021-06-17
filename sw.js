
const cacheName = "phys-helper-15-28-v1";
const cacheFiles = [
  "./index.html",
  "./js/materialize.min.js",
  "./js/materialize.js",
  "./css/materialize.min.css",
  "./css/materialize.css",
  "./ch.js",
  "./sol/ch.js",
  "./sol/ch15.html",
  "./sol/ch16.html",
  "./sol/ch17.html",
  "./sol/ch18.html",
  "./sol/ch19.html",
  "./sol/ch20.html",
  "./sol/ch21.html",
  "./sol/ch22.html",
  "./sol/ch23.html",
  "./sol/ch24.html",
  "./sol/ch25.html",
  "./sol/ch26.html",
  "./sol/ch27.html",
  "./sol/ch28.html",
  "./sol/ch29.html",
  "./sol/ch33.html",
  "./sol/ch34.html",
  "./sol/ch35.html",
  "./sol/img/20.48.jpg",
  "./sol/img/22-52.jpg",
  "./sol/img/23.13.jpg",
  "./sol/img/23.32.png",
  "./sol/img/23.60.jpg",
  "./sol/img/24.46.png",
  "./sol/img/24.69.png",
  "./sol/img/25.73.png",
  "./sol/img/25.79.png",
  "./sol/img/25.83.png",
  "./sol/img/26.45.png",
  "./sol/img/26.76.png",
  "./sol/img/26.80.jpg",
  "./sol/img/27.61.png",
  "./sol/img/29.14.jpg"
]

self.addEventListener('install', e => {
  console.log(`[Service Worker] Installing SW with cache name ${cacheName}`)
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[Service Worker] Caching new files');
      return cache.addAll(cacheFiles);
    })
  );
});


self.addEventListener('activate', e => {
	console.log(`[Service Worker] Activating SW with cache name ${cacheName}`);
	e.waitUntil(
		caches.keys().then(cacheNames => {
			var promiseArr = cacheNames.map(item => {
				if (item !== cacheName) {
	        console.log(`[Service Worker] Deleting old cache ${item}`);
					return caches.delete(item);
				}
			})
			return Promise.all(promiseArr);
		})
	);
});

self.addEventListener('fetch', e => {
  if (e.request.method == "GET") {
    e.respondWith((async () => {
      const r = await caches.match(e.request);
      if (r) 
        return r;
      const response = await fetch(e.request);
      const cache = await caches.open(cacheName);
      console.log(`[Service Worker] Caching new resource: ${e.request.url}`);
      cache.put(e.request, response.clone());
      return response;
    })());
  }
});



