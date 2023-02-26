
// Створюємо методи які будуть відслідковувати дії баузера щодо
// зменшення / збільшення значення змінної counterValue.

const counterValue = {
  value: 0,
  decrement() { 
    this.value -= 1;
  },
  increment() { 
    this.value += 1;
  },
  
};

// Варіант 2 - те саме, але в середені функція, 
// яка змінює колір обєкта, який приймає значення counterValue

// const counterValue = {
//   value: 0,
//   decrement() { 
//     this.value -= 1;
    
//     if (this.value < 0) {
//       elementVal.style.backgroundColor = 'red';
//     } else {
//       elementVal.style.backgroundColor = 'lime';
//  }
//   },
//   increment() { 
//     this.value += 1;
    
//     if (this.value < 0) {
//       elementVal.style.backgroundColor = 'red';
//     } else {
//       elementVal.style.backgroundColor = 'lime';
//  }
//   },
// };

// Отримуємо посилання на обєкти HTML - ромітки і відповідно інтерфейсу.

const decrementBtn = document.querySelector('button[data-action="decrement"]');
decrementBtn.style.backgroundColor = 'yellow';
console.log(decrementBtn);
const incrementBtn = document.querySelector('button[data-action="increment"]');
incrementBtn.style.backgroundColor = 'lime';
console.log(incrementBtn);
const elementVal = document.querySelector('#value');
console.log(elementVal);

// Переносимо відповідний метод і підключаємо його до посилання на обєкт, 
// дії браузера щодо якого треба відслідкувати і відобразити у відповідному інтерфейсі;

decrementBtn.addEventListener('click', function () {
  counterValue.decrement();
  elementVal.textContent = counterValue.value;
  
  colorChange();
  // colorChangeBtn();
});
incrementBtn.addEventListener('click', function () {
  counterValue.increment();
  elementVal.textContent = counterValue.value;
  
  colorChange();
  // colorChangeBtn();
});


// Можна додати функцію, яка буде змінювати колір обєкта, який приймає зачення
// - в залежності від значення > 0 < значення;

const colorChange = () => {
  if (counterValue.value < 0) {
    elementVal.style.backgroundColor = 'yellow';
  } else {
    elementVal.style.backgroundColor = 'lime';
  }
};

// і так само для обєктів кнопок;

// const colorChangeBtn = () => {
//   if (counterValue.value < 0) {
//     decrementBtn.style.backgroundColor = 'yellow';
//   } else {
//     incrementBtn.style.backgroundColor = 'lime';
//   }
// };


