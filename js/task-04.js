let counterValue = 0;
let value = document.querySelector("#value");

const decrementButton = document.querySelector(
  'button[data-action="decrement"]'
);

const onDecrementButtonClick = () => {
  counterValue -= 1;
  value.textContent = counterValue;
};

const incrementButton = document.querySelector(
  'button[data-action="increment"]'
);

const onIncrementButtonClick = () => {
  counterValue += 1;
  value.textContent = counterValue;
};

decrementButton.addEventListener("click", onDecrementButtonClick);
incrementButton.addEventListener("click", onIncrementButtonClick);
