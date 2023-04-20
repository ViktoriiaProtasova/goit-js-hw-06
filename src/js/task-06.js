const inputEl = document.querySelector("#validation-input");
const validDataLength = document.querySelector("input[data-length]");

const handleInput = () => {
  console.log(inputEl.value.length);
};

const handleBlur = () => {
  if (inputEl.value.length === Number(validDataLength.dataset.length)) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  } else {
    inputEl.classList.remove("valid");
    inputEl.classList.add("invalid");
  }
};

inputEl.addEventListener("input", handleInput);
inputEl.addEventListener("blur", handleBlur);
