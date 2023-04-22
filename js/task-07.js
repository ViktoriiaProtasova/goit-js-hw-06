const inputEl = document.querySelector("#font-size-control");
const outputText = document.querySelector("#text");

outputText.style.fontSize = `${
  (Number(inputEl["max"]) + Number(inputEl["min"])) / 2
}px`;

const handleInput = () => {
  outputText.style.fontSize = `${inputEl.value}px`;
};

inputEl.addEventListener("input", handleInput);
