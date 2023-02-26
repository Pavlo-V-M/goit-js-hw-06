
// Helper Function
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Solution:
//1. Create the createBoxes(amount) Functionfor Create Collection of Elements + change boxWidth & boxHeight next element.
function createBoxes(amount) {
  let boxWidth = 30;
  let boxHeight = 30;

  for (let i = 0; i < amount; i += 1) {
    let box = document.createElement('div');
    box.style.width = `${boxWidth}px`;
    box.style.height = `${boxHeight}px`;
    box.style.backgroundColor = getRandomHexColor();
    document.querySelector('#boxes').appendChild(box);
    boxWidth += 10;
    boxHeight += 10;
  }
}

//2. Create the destroyBoxes() Function for Destroy Collection of Elements

function destroyBoxes() {
  let boxes = document.querySelector('#boxes');
  boxes.innerHTML = '';
}

const controlBtnCreate = document.querySelector('[data-create]');
controlBtnCreate.addEventListener('click', () => {
  let amount = document.querySelector('input').value;
  createBoxes(amount);
});

const controlBtnDestroy = document.querySelector('[data-destroy]');
controlBtnDestroy.addEventListener('click', () => {
  destroyBoxes();
});