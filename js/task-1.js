const categories = document.querySelector("#categories");

const items = document.querySelectorAll("li.item");

console.log("Number of categories:", items.length);

items.forEach((item) => {
  const titleCategory = item.querySelector("h2").textContent;
  const titleElements = item.querySelectorAll("li");

  console.log("Category:", titleCategory);

  console.log("Elements:", titleElements.length);
});
