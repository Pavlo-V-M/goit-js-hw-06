
const fontSizeControl = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

/* Помилка ... відбудиться зворотній стрибок розміру при русі назад 
   fontSizeControl.addEventListener('input', () => {
   text.style.fontSize = `${fontSizeControl.value}px`;
   });
*/

/* 1. text.style.fontSize = `${fontSizeControl.value}px`
   додатково винести перед функцією ...
   це запобігатиме зворотньому стрибку роміру при русі назад.
*/

text.style.fontSize = `${fontSizeControl.value}px`;
fontSizeControl.addEventListener('input', () => {
  text.style.fontSize = `${fontSizeControl.value}px`;  
});
