
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// const list = document.querySelector("#ingredients");

// const newArray = ingredients.map(ingredient => {
// 	const items = document.createElement("li");
// 	items.textContent = ingredient;
// 	items.classList = "item";
// 	return items;
// });

// list.append(...newArray);

const list = document.querySelector('#ingredients');

  ingredients.forEach(ingredient => {
    const item = document.createElement('li');
    item.classList.add('item');
    item.textContent = ingredient;
    list.appendChild(item);
  });