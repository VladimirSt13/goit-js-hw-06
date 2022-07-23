const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const email = event.currentTarget.elements.email.value;
  const password = event.currentTarget.elements.password.value;

  if (!email || !password) {
    alert('all fields must be filled');
  } else {
    const userData = { email, password };
    console.log(userData);
    loginForm.reset();
  }
}
