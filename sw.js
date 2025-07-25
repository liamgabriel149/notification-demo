// sw.js (required for mobile notifications to work via service worker)
self.addEventListener('notificationclick', function(event) {
  event.notification.close();
});
