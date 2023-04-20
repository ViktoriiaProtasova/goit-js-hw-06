const categoriesEl = document.querySelector("#categories");

console.log(`Number of categories: ${categoriesEl.children.length}`);

const itemsEl = document.querySelectorAll(".item");

itemsEl.forEach((el) => {
  console.log(`Category: ${el.firstElementChild.textContent}`);
  console.log(`Elements: ${el.lastElementChild.children.length}`);
});
