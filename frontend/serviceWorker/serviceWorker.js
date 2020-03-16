'use strict';

self.addEventListener('fetch', function(event) {});

self.addEventListener('push',(event)=>{
  console.log([`서비스 워커] 푸쉬 알림을 받았습니다.${event.data.text()}`]);
  const title = 'TripBtoz';

  const option = {
    body:`${event.data.text()}`,
    icon:'/favicon/android-icon-72x72.png',
    badge:'/favicon/android-icon-192x192.png'
  };

  event.waitUntil(self.registration.showNotification(title, option));
});

// 알림 메시지 클릭시
self.addEventListener('notificationclick', (event)=>{
  //클릭한 알림을 닫는다.
  event.notification.close();

  //기다린다. 새창이 열리기전ㄲ/ㅏ지 서비스 워커를 종료못하게
  event.waitUntil(
      //새창을 연다
      clients.openWindow('https://www.tripBtoz.com')
  )
});
