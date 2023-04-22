const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const list = document.querySelector(".gallery");

const markup = images
  .map(
    (img) =>
      `<li><img src="${img.url}" alt="${img.alt}" width="390" height="260" style="display: block; border-radius: 5px; margin-right: 13px;"></li>`
  )
  .join("");

list.insertAdjacentHTML("afterbegin", markup);

list.style.display = "flex";
list.style.justifyContent = "center";
list.style.marginRight = "auto";
list.style.marginLeft = "auto";
list.style.paddingLeft = "0";
list.style.listStyle = "none";
list.lastElementChild.style.marginRight = "0";
