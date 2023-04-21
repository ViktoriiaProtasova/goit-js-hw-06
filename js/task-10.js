function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxesEl = document.querySelector("#boxes");
const formOfControls = document.querySelector("#controls");
const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");

let amount = 0;

const handleInputAmount = () => {
  amount = Number(formOfControls.firstElementChild.value);
};

formOfControls.firstElementChild.addEventListener("input", handleInputAmount);

const onBtnCreateClick = () => {
  createBoxes(amount);
};

btnCreate.addEventListener("click", onBtnCreateClick);

function createBoxes(amount) {
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
    counter += 1;
    width += 10;
    height += 10;
  }

  boxesEl.prepend(...boxesContainers);
}

function destroyBoxes() {
  while (boxesEl.firstChild) {
    boxesEl.removeChild(boxesEl.firstChild);
  }
  formOfControls.firstElementChild.value = "";

  /* Значення очищується, але залишається в пам'яті і спрацьовує
   при повторному натисканні кнопки Create. Якби розмітка буа реалізована
   через тег <form> можна було б використати reset().
   В нашому випадку простіше взагалі перезавантажити сторінку 
   і все відчиститься document.location.reload();
*/
}

btnDestroy.addEventListener("click", destroyBoxes);
