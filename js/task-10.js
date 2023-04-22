const inputEl = document.querySelector('input[type="number"]');
const boxesEl = document.querySelector("#boxes");
const formOfControls = document.querySelector("#controls");
const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");
const min = inputEl.getAttribute("min");
const max = inputEl.getAttribute("max");
const step = inputEl.getAttribute("step");
let amount = 0;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const handleInputAmount = () => {
  amount = Number(inputEl.value);
};

const onBtnCreateClick = () => {
  createBoxes(amount);
};

function createBoxes(amount) {
  if (amount < min || amount > max) {
    alert("Введіть коректне значення");
    return;
  }

  let counter = 0;
  let width = 30;
  let height = 30;

  const boxesContainers = [];

  while (counter < amount) {
    let container = document.createElement("div");

    container.style.width = `${width}px`;
    container.style.height = `${height}px`;
    container.style.backgroundColor = getRandomHexColor();

    boxesContainers.push(container);
    counter += Number(step);
    width += 10;
    height += 10;
  }

  boxesEl.append(...boxesContainers);
}

function destroyBoxes() {
  boxesEl.innerHTML = "";
}

inputEl.addEventListener("input", handleInputAmount);

btnCreate.addEventListener("click", onBtnCreateClick);

btnDestroy.addEventListener("click", destroyBoxes);
