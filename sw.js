importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');


workbox.routing.registerRoute(
    /assets/,
    new workbox.strategies.StaleWhileRevalidate({
      cacheName: 'static-files',
      plugins: [
        new workbox.expiration.ExpirationPlugin({
          purgeOnQuotaError: true,
          maxEntries: 100
  
        })
      ]
    })
  )