
const inputName = document.querySelector('#name-input');

const outputName = document.querySelector('#name-output');

// Try 1
// inputName.addEventListener('keyup', () => {
//   outputName.textContent = inputName.value;
// });

// Try 2
// inputName.addEventListener('keydown', () => {
//   outputName.textContent = inputName.value;
// });
// inputName.addEventListener('keyup', () => {
//   outputName.textContent = inputName.value;
// });


// Try 3
// inputName.addEventListener('input', element => {
//   outputName.textContent = element.target.value;
// });

// Solution
const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', (e) => {
  let name = e.target.value;
  if (name.trim() !== '') {
    nameOutput.textContent = name;
  } else {
    nameOutput.textContent = 'Anonymous';
  }
});


