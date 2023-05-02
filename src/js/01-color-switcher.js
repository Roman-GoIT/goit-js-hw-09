const start = document.querySelector('button[data-start]');
const stop = document.querySelector('button[data-stop]');
const background = document.querySelector('body');
let intId = null;

start.addEventListener('click', onStart);

function onStart() {
    start.disabled = true;
  intId = setInterval(() => {
    background.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

stop.addEventListener('click', onStop)

function onStop() {
    start.disabled = false;
    clearInterval(intId)
}