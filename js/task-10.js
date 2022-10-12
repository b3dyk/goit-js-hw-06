function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBtnRef = document.querySelector("[data-create]");
const destroyBtnRef = document.querySelector("[data-destroy]");
const inputRef = document.querySelector("[type='number']");
const boxesRef = document.querySelector("#boxes");

createBtnRef.addEventListener("click", onCreate);
destroyBtnRef.addEventListener("click", onDestroy);

function onCreate() {
  const numberOfBoxes = Number(inputRef.value);
  const min = Number(inputRef.getAttribute("min"));
  const max = Number(inputRef.getAttribute("max"));

  if (numberOfBoxes >= min && numberOfBoxes <= max) {
    boxesRef.append(...createBoxes(numberOfBoxes));
  }
}

function onDestroy() {
  boxesRef.innerHTML = "";
  inputRef.value = "";
}

function createBoxes(amount) {
  const arrOfElements = [];
  const step = Number(inputRef.getAttribute("step"));

  for (let i = 0; i < amount; i += step) {
    const box = document.createElement("div");

    box.style.width = 30 + i * 10 + "px";
    box.style.height = 30 + i * 10 + "px";
    box.style.backgroundColor = `${getRandomHexColor()}`;

    arrOfElements.push(box);
  }
  return arrOfElements;
}
