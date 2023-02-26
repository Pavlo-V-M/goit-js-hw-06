
const form = document.querySelector('.login-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = form.elements.email.value;
  const password = form.elements.password.value;

  if (email && password) {
    const data = {
      email,
      password
    };

    console.log(data);
    form.reset();
  } else {
    alert('All fields are required!');
  }
});
