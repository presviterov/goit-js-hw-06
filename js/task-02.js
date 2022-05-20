const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const foodList = document.getElementById("ingredients");
const markup = ingredients.map((ingredient) => {
    let item = document.createElement("li");
    item.className = "item";
    item.innerHTML = ingredient;
    return item
  });

foodList.append(...markup);

// const foodIngredient = ingredients.forEach(ingredient => {
//   let item = document.createElement("li");
//   item.className = "item";
//   item.innerHTML = ingredient;
//   });

// const markup = ingredients
//  .map((ingredient) => `<li class="item">${ingredient}</li>`)
//  .join("");
