
const categoriesList = document.querySelectorAll('li.item');
// console.log(categoryList);

const quantityСategories = categoriesList.length;
// console.log('Number of categories: ' + quantityСategories);
console.log(`Number of categories: ${quantityСategories}`);

categoriesList.forEach(function (element){
  console.log(`Category: ${element.firstElementChild.textContent}`);
  console.log(`Elements: ${element.lastElementChild.children.length}`);
});


// const bodyElements = document.body;
// console.log(bodyElements);

// const childNodes = bodyElements.childNodes;
// console.log(childNodes);

// const bodyChildren = bodyElements.children;
// console.log(bodyChildren);

// const categoryElements = document.querySelectorAll('h2');
// console.log(categoryElements.nextSibling);

// categoryElements.forEach(function (element){
//   console.log(`${element.nextElementSibling}`);
// });

// {
//   // Access each tag in HTML
// let html = document.querySelector('html');
// let head = document.querySelector('head');
// let body = document.querySelector('body');
// let p = document.querySelector('p');
// let ul = document.querySelector('ul');
// let h2s = document.querySelectorAll('h2');
// let lis = document.querySelectorAll('li');
// let scripts = document.querySelectorAll('script');

// // Output content of each tag to the console
// console.log(html.innerHTML);
// console.log(head.innerHTML);
// console.log(body.innerHTML);
// console.log(p.innerHTML);
// console.log(ul.innerHTML);

//   h2s.forEach(h2 => console.log(h2.innerHTML));
//   lis.forEach(li => console.log(li.innerHTML));
//   scripts.forEach(script => console.log(script.innerHTML));
// }

{ 
  let h2s = document.querySelectorAll('h2');
  h2s.forEach(h2 => console.log(h2.innerHTML));
}

// { 
//   let ul = document.querySelector('ul');
//   console.log(ul.innerHTML);
// }

// { 
//   let lis = document.querySelectorAll('li');
//   lis.forEach(li => console.log(li.innerHTML));
// }

{
  // Ok. Now output content of first teg <ul> to the console.
  let ul = document.querySelector('ul');
  console.log(ul.firstElementChild.innerHTML);
}

{
  // Ok. Now output content of second teg <ul> to the console.
  let ul = document.querySelector('ul');
  console.log(ul.childNodes[1].innerHTML);
}
{
// Ok. Now output content of third teg <ul> to the console.
  let ul = document.querySelector('ul');
  console.log(ul.lastElementChild.innerHTML);
}

{ 
  let uls = document.querySelectorAll('ul');
  uls.forEach(ul => console.log(ul.innerHTML));
}

{ 
  let ul = document.querySelector('ul');
  console.log(ul.innerHTML);
}

{ 
  let uls = document.querySelectorAll('ul');
  uls.forEach(ul => console.log(ul.innerHTML));
}

{ 
  let ul = document.querySelector('ul');
  console.log(ul.innerHTML);
}

{ 
  let ul = document.querySelector('ul');
  let ulChildren = ul.children;
  ulChildren.forEach(child => console.log(child.innerHTML));
}
// {
//   let h2s = document.querySelectorAll('h2');
//   let ul = document.querySelector('ul');
//   let lis = document.querySelectorAll('li');

//   h2s.forEach(h2 => console.log(h2.innerHTML));
//   console.log(ul.innerHTML);
//   lis.forEach(li => console.log(li.innerHTML));
// }
