
// створюємо змінну і присвоюємо її значення
// із посиланням на поле введення

const inputHref = document.querySelector('#validation-input');
const TextInputLength = document.querySelector('input[data-length="6"]');

console.log(typeof (TextInputLength));
console.log(TextInputLength);
console.log(TextInputLength.getAttribute('data-length'));

// створюємо змінну, яка буде відслідковувати 
// кількість символів в строці

const textLength = TextInputLength.getAttribute('data-length');
console.log(Number(textLength));
console.log(typeof (textLength));

const textLengthNumb = Number.parseInt(textLength);
console.log(textLengthNumb);
console.log(typeof(textLengthNumb));


// Додаємо слухача подій до змінної - посилання і
// перетворюємо цю конструкцію в модель із викликом функцій
// Створюємо функцію, яка буде перевіряти довжину введеного поля

inputHref.addEventListener('blur', function(e) {
  const inputLength = e.target.value.length;
  if(inputLength === textLengthNumb) {
    inputHref.classList.add('valid');
    inputHref.classList.remove('invalid');
  } else {
    inputHref.classList.remove('valid');
    inputHref.classList.add('invalid');
  }
});


// {
//   const input = document.getElementById('validation-input');
//   const length = Number(input.dataset.length);

//   input.addEventListener('blur', () => {
//     let inputValue = input.value.length;
//     if (inputValue === length) {
//       input.classList.add('valid');
//       input.classList.remove('invalid');
//     } else {
//       input.classList.add('invalid');
//       input.classList.remove('valid');
//     }
//   });
// }
 

  




