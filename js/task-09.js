function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Solution
const btnChangeColor = document.querySelector('.change-color');
const colorBlock = document.querySelector('.color');

btnChangeColor.addEventListener('click', () => {
  const randomHexColor = getRandomHexColor();
  document.body.style.backgroundColor = randomHexColor;
  colorBlock.innerText = randomHexColor;
});
