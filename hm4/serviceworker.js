const cacheName = 'v1';



self.addEventListener('install', e => {
console.log('service Worker: Instaled');

});
self.addEventListener('activate', e => {
    console.log('service Worker: Activated');

    e.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cache => {
                    if (cache !== cacheName){
                        console.log('sw:clearing old cache');
                        return caches.delete(cache);
                    }
                })
            );
        })
     );
    });
   



self.addEventListener('fetch' , e => {
        console.log("fitching");
        e.respondWith(
            fetch(e.request)
            .then(res => {
                const resClone = res.clone();

                caches
                .open(cacheName)
                .then(cache => {
                    cache.put(e.request, resClone);
                });
                return res;
            }).catch(err => caches.match(e.request).then(res => res))
        );
    });

  
