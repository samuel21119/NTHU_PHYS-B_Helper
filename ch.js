const availableCh = [15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 33, 34];

(() => {
  const chs = document.getElementById("chs");
  availableCh.forEach(ch => {
    let a = document.createElement("a");
    a.setAttribute("href", `./sol/ch${ch}.html`);
    a.setAttribute("class", "collection-item");
    a.innerText = `CH. ${ch}`;
    chs.appendChild(a);
  });
})();

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').then(registration => {
      console.log('[Service Worker] Registration successful with scope: ', registration.scope);
    }).catch(err => {
      console.log('[Service Worker] Registration failed: ', err);
    });
  });
}

