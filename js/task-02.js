const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

let html = "";

ingredients.forEach((ingredient) => {
  html += `<li class="item">${ingredient}</li>`;
});

const ingredientsListRef = document.querySelector("#ingredients");

ingredientsListRef.innerHTML = html;

console.log(ingredientsListRef);
