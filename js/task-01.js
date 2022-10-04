const categoriesListRef = document.querySelector("#categories");
const categoriesRef = categoriesListRef.querySelectorAll(".item");

console.log("Number of categories: ", categoriesRef.length);

categoriesRef.forEach((category) => {
  const categoryHeadingRef = category.querySelector("h2");
  console.log("Category: ", categoryHeadingRef.innerHTML);

  const categoryElementsRef = category.querySelectorAll("li");
  console.log("Elements: ", categoryElementsRef.length);
});
