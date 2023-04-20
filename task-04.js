let counterValue = 0;
let value = document.querySelector("#value");

const decrementButton = document.querySelector(
  'button[data-action="decrement"]'
);

const onDecrementButtonClick = () => {
  counterValue -= 1;
  value.textContent = counterValue;
};

decrementButton.addEventListener("click", onDecrementButtonClick);

const incrementButton = document.querySelector(
  'button[data-action="increment"]'
);

const onIncrementButtonClick = () => {
  counterValue += 1;
  value.textContent = counterValue;
};

incrementButton.addEventListener("click", onIncrementButtonClick);
