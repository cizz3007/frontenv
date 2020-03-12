window.centralize = function (cssSelector) {
  const targetHeight = cssSelector.offsetHeight;
  const targetWidth = cssSelector.offsetWidth;
  const windowHeight = window.document.body.clientHeight;
  const windowWidth = window.document.body.clientWidth;

  cssSelector.style.position = 'absolute';
  cssSelector.style.top = Math.max(((windowHeight - targetHeight) / 2) + window.scrollY) + "px";
  cssSelector.style.left = Math.max(((windowWidth - targetWidth) / 2) + window.scrollX) + "px";
}

window.lockScreen = function () {
  document.getElementsByTagName('body')[0].style.overflow = 'hidden'
}

window.unlockScreen = function () {
  document.getElementsByTagName('body')[0].style.overflow = 'auto';
}
