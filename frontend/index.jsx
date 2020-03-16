import React from 'react';
import ReactDOM from 'react-dom';
import IndexPage from "./pages";

const root = document.getElementById('app');

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('./serviceworker.js').then((swReg) => {
      console.log('# 현재 브라우저에서 서비스 워커를 사용할 수 있습니다.', swReg);
    }).catch((err) => {
      console.error('서비스 워커 에러 발생 :', err);
    });
  });
}

ReactDOM.render(<IndexPage/>, root);
