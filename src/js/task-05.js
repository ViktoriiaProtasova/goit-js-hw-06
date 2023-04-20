const inputEl = document.querySelector("#name-input");
let outputEl = document.querySelector("#name-output");

const handleInput = () => {
  if (inputEl.value !== "") {
    outputEl.textContent = inputEl.value;
  } else {
    outputEl.textContent = "Anonymous";
  }
};

inputEl.addEventListener("input", handleInput);
