const inputEl = document.querySelector("#font-size-control");
const outputText = document.querySelector("#text");

const handleInput = () => {
  outputText.style.fontSize = `${inputEl.value}px`;
};

inputEl.addEventListener("input", handleInput);
