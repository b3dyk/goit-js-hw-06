const inputRef = document.querySelector("#validation-input");

inputRef.addEventListener("blur", (event) => {
  const attributeValue = event.currentTarget.getAttribute("data-length");
  const inputLength = event.currentTarget.value.length;

  if (inputLength < attributeValue) {
    return inputRef.classList.add("invalid");
  }

  inputRef.classList.remove("invalid");
  return inputRef.classList.add("valid");
});

// =================================================================================

// inputRef.addEventListener("blur", (event) => {
//   const attributeValue = event.currentTarget.getAttribute("data-length");
//   const inputLength = event.currentTarget.value.length;

//   inputLength < attributeValue
//     ? inputRef.classList.add("invalid")
//     : inputRef.classList.remove("invalid");

//   inputRef.classList.add("valid");
// });
