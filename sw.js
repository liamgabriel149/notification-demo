// sw.js

self.addEventListener('install', event => {
  console.log("✅ Service Worker Installed");
});

self.addEventListener('activate', event => {
  console.log("🔁 Service Worker Activated");
});

self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  event.waitUntil(
    clients.openWindow("https://yourusername.github.io/") // change to your GitHub Pages link
  );
});
