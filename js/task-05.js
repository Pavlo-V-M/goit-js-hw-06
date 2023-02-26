
const inputName = document.querySelector('#name-input');

const outputName = document.querySelector('#name-output');

// inputName.addEventListener('keyup', () => {
//   outputName.textContent = inputName.value;
// });

// inputName.addEventListener('keydown', () => {
//   outputName.textContent = inputName.value;
// });
// inputName.addEventListener('keyup', () => {
//   outputName.textContent = inputName.value;
// });

inputName.addEventListener('input', element => {
  outputName.textContent = element.target.value;
});
