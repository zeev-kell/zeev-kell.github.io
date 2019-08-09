importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/1f10dc2423c8807dad67.js",
    "revision": "65525501dc5924d600c5c51883126c32"
  },
  {
    "url": "/_nuxt/25dd23185830e0ebb59d.js",
    "revision": "5cb7646163f1cbd6f47fbf1f48c638dd"
  },
  {
    "url": "/_nuxt/d46c896770a660dd9317.js",
    "revision": "6a7027b352607549f541bdc065e366c1"
  },
  {
    "url": "/_nuxt/df38e5901215d72938fe.js",
    "revision": "39f5a83c41465743901ba0c3d5bf0d31"
  },
  {
    "url": "/_nuxt/fdcdbe3c3d9f7f6eb83d.js",
    "revision": "ddbd507ab88803295b77df2158f3abf1"
  }
], {
  "cacheId": "zeev-kell",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
