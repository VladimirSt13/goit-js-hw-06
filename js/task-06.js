const input = document.querySelector('#validation-input');

input.addEventListener('blur', onBlurInput);

function onBlurInput() {
  const inputLenght = input.value.length;
  const inputRequiredLenght = Number(input.dataset.length);

  if (inputRequiredLenght === inputLenght) {
    input.classList.add('valid');
    input.classList.remove('invalid');
  } else {
    input.classList.add('invalid');
    input.classList.remove('valid');
  }
}
