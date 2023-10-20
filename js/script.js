const btn = document.querySelector(".btn");
const paranja = document.querySelector(".paranja");
const formWrapper = document.querySelector(".form-wrapper");
const body = document.querySelector("body");

btn.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("click!");
  paranja.classList.toggle("open");
  formWrapper.classList.toggle("open");
  body.classList.toggle("block");
});

formWrapper.addEventListener("touchstart", handleTouchStart);
formWrapper.addEventListener("touchmove", handleTouchMove);

let x1 = null;
let y1 = null;

function handleTouchStart(event) {
  const firstTouch = event.touches[0];
  x1 = firstTouch.clientX;
  y1 = firstTouch.clientY;
}

function handleTouchMove(event) {
  if (!x1 || !y1) {
    return false;
  }

  let x2 = event.touches[0].clientX;
  let y2 = event.touches[0].clientY;

  let xDif = x2 - x1;
  let yDif = y2 - y1;

  if (Math.abs(xDif) < Math.abs(yDif) && yDif > 0 && yDif > 50 && event.touches.length === 1) {
    paranja.classList.remove("open");
    formWrapper.classList.remove("open");
    body.classList.remove("block");
  }
}
