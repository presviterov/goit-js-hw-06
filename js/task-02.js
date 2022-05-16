const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const foodList = document.getElementById("ingredients");
const foodIngredient = ingredients.forEach(ingredient => {
  let item = document.createElement("li");
  item.className = "item";
  item.innerHTML = ingredient;
  foodList.append(item);
  });


// const markup = ingredients
//  .map((ingredient) => `<li class="item">${ingredient}</li>`)
//  .join("");
