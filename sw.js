const CACHE = 'agenda-couple-v3';
const BASE = '/notre-agenda';
const ASSETS = [
  BASE + '/index.html',
  BASE + '/manifest.json',
  BASE + '/icons/icon-192.png',
  BASE + '/icons/icon-512.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const url = e.request.url;
  if (url.includes('firebaseio.com') || url.includes('googleapis.com') || url.includes('fonts.g')) return;
  e.respondWith(
    fetch(e.request).then(res => {
      if (res && res.status === 200 && e.request.method === 'GET') {
        caches.open(CACHE).then(c => c.put(e.request, res.clone()));
      }
      return res;
    }).catch(() => caches.match(e.request))
  );
});

self.addEventListener('push', e => {
  const data = e.data ? e.data.json() : {};
  e.waitUntil(self.registration.showNotification(data.title || '💑 Notre Agenda', {
    body: data.body || 'Nouvel événement ajouté',
    icon: BASE + '/icons/icon-192.png',
    badge: BASE + '/icons/icon-192.png',
    vibrate: [100, 50, 100],
    tag: 'agenda-notif',
    renotify: true
  }));
});

self.addEventListener('notificationclick', e => {
  e.notification.close();
  e.waitUntil(clients.matchAll({ type: 'window', includeUncontrolled: true }).then(cls => {
    if (cls.length) return cls[0].focus();
    return clients.openWindow(BASE + '/index.html');
  }));
});
