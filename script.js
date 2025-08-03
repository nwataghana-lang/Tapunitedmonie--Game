
let count = 0;
const button = document.getElementById("tap-btn");
const counter = document.getElementById("counter");

button.addEventListener("click", () => {
  count++;
  counter.textContent = `Taps: ${count}`;
});
