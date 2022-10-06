let counterValue = 0;
const decrementBtnRef = document.querySelector("[data-action=decrement]");
const incrementBtnRef = document.querySelector("[data-action=increment]");
const valueRef = document.querySelector("#value");

const onDecrease = () => {
  counterValue -= 1;
  valueRef.innerText = counterValue;
};

const onIncrease = () => {
  counterValue += 1;
  valueRef.innerText = counterValue;
};

// =====================================================

// const valueToText = () => {
//   valueRef.innerText = counterValue;
// };

// const onDecrease = () => {
//   counterValue -= 1;
//   valueToText();
// };

// const onIncrease = () => {
//   counterValue += 1;
//   valueToText();
// };

// =====================================================

decrementBtnRef.addEventListener("click", onDecrease);
incrementBtnRef.addEventListener("click", onIncrease);
