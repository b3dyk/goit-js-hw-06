const fontSizeControllRef = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");

fontSizeControllRef.addEventListener("input", (event) => {
  textRef.style.fontSize = `${event.target.value}px`;
});
