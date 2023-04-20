const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsEl = [];

ingredients.forEach((el) => {
  const item = document.createElement("li");

  item.textContent = `${el}`;
  item.classList.add("item");

  ingredientsEl.push(item);
});

const ingredientsParrentEl = document.querySelector("#ingredients");

ingredientsParrentEl.prepend(...ingredientsEl);
