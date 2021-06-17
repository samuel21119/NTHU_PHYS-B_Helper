const availableCh = [15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 33, 34, 35];

(() => {
  const dropdown = document.getElementById("dropdown1");
  availableCh.forEach(ch => {
    let li = document.createElement("li");
    let a = document.createElement("a");
    a.setAttribute("href", `ch${ch}.html`);
    a.innerText = `CH. ${ch}`;
    li.appendChild(a);
    dropdown.appendChild(li);
  });
})();
