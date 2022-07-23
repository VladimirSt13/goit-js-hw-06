const input = document.querySelector('#validation-input');

input.addEventListener('blur', onBlurInput);

function onBlurInput() {
  const inputLenght = input.value.length;
  const inputRequiredLenght = input.dataset.length;

  if (inputRequiredLenght <= inputLenght) {
    if (!input.classList.contains('valid')) {
      input.classList.add('valid');
    }
    if (input.classList.contains('invalid')) {
      input.classList.remove('invalid');
    }
  } else {
    if (!input.classList.contains('invalid')) {
      input.classList.add('invalid');
    }
    if (input.classList.contains('valid')) {
      input.classList.remove('valid');
    }
  }
}
