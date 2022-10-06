const inputRef = document.querySelector("#validation-input");

inputRef.addEventListener("blur", (event) => {
  const attributeValue = event.currentTarget.getAttribute("data-length");
  const inputLength = event.currentTarget.value.length;

  if (inputLength < attributeValue) {
    inputRef.classList.remove("valid");
    return inputRef.classList.add("invalid");
  }

  inputRef.classList.remove("invalid");
  return inputRef.classList.add("valid");
});

// Другий варіант виконання=================================================================================

// inputRef.addEventListener("blur", (event) => {
//   const attributeValue = event.currentTarget.getAttribute("data-length");
//   const inputLength = event.currentTarget.value.length;

//   inputLength < attributeValue
//     ? inputRef.classList.add("invalid")
//     : inputRef.classList.remove("invalid");

//   inputRef.classList.add("valid");
// });
