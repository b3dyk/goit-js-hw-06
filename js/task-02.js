const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsListRef = document.querySelector("#ingredients");

function createElement(text) {
  const li = document.createElement("li");

  li.classList.add("item");
  li.textContent = text;

  return li;
}

const list = ingredients.map((ingredient) => {
  return createElement(ingredient);
});

ingredientsListRef.append(...list);

// 2-й варіант================================================================

// let html = "";

// ingredients.forEach((ingredient) => {
//   html += `<li class="item">${ingredient}</li>`;
// });

// ingredientsListRef.innerHTML = html;
