const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsEl = ingredients.map((el) => {
  const item = document.createElement("li");

  item.textContent = `${el}`;
  item.classList.add("item");

  return item;
});

const ingredientsParrentEl = document.querySelector("#ingredients");

ingredientsParrentEl.append(...ingredientsEl);
