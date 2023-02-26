
const categoriesList = document.querySelectorAll('li.item');
// console.log(categoryList);

const quantityСategories = categoriesList.length;
// console.log('Number of categories: ' + quantityСategories);
console.log(`Number of categories: ${quantityСategories}`);

categoriesList.forEach(function (element){
  console.log(`Category: ${element.firstElementChild.textContent}`);
  console.log(`Elements: ${element.lastElementChild.children.length}`);
});