let counterValue = 0;
const decrementBtnRef = document.querySelector("[data-action=decrement]");
const incrementBtnRef = document.querySelector("[data-action=increment]");
const valueRef = document.querySelector("#value");

const increment = () => {
  counterValue += 1;
  return (valueRef.innerText = counterValue);
};

const decrement = () => {
  counterValue -= 1;
  return (valueRef.innerText = counterValue);
};

decrementBtnRef.addEventListener("click", decrement);
incrementBtnRef.addEventListener("click", increment);
