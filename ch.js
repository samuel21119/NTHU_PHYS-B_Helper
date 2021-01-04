const availableCh = [15, 16, 17];

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