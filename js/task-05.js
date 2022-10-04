const inputRef = document.querySelector("#name-input");
const outputRef = document.querySelector("#name-output");

inputRef.addEventListener("input", (event) => {
  outputRef.innerText = event.currentTarget.value;
});

inputRef.addEventListener("blur", (event) => {
  if (event.currentTarget.value === "") {
    outputRef.innerText = "Anonymous";
  }
});
