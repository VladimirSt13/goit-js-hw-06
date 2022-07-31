const counterValue = document.querySelector('#value');
const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');

counterValue.textContent = 0;

incrementBtn.addEventListener('click', onIncrementValue);
decrementBtn.addEventListener('click', onDecrementValue);

function onIncrementValue() {
  counterValue.textContent = Number(counterValue.textContent) + 1;
}
function onDecrementValue() {
  counterValue.textContent -= 1;
}
