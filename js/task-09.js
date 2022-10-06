function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const colorNameRef = document.querySelector(".color");
const changeColorBtnRef = document.querySelector(".change-color");
const bodyRef = document.querySelector("body");

changeColorBtnRef.addEventListener("click", () => {
  bodyRef.style.backgroundColor = getRandomHexColor();
  colorNameRef.textContent = getRandomHexColor();
});
