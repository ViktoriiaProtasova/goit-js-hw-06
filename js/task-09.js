function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorEl = document.querySelector(".change-color");
let colorName = document.querySelector(".color");

const onChangeColorElClick = () => {
  const randomColor = getRandomHexColor();

  document.body.style.backgroundColor = randomColor;
  colorName.textContent = randomColor;
};

changeColorEl.addEventListener("click", onChangeColorElClick);
