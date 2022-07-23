const counterValue = document.querySelector('#value');
const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');

counterValue.textContent = 0;

incrementBtn.addEventListener('click', onIncrenentValue);
decrementBtn.addEventListener('click', onDecrenentValue);

function onIncrenentValue() {
  counterValue.textContent = Number(counterValue.textContent) + 1;
}
function onDecrenentValue() {
  counterValue.textContent -= 1;
}
