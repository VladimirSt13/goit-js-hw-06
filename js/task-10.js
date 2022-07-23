const inputNumber = document.querySelector('#controls');
const boxes = document.querySelector('#boxes');
const createBtn = document.querySelector('[data-create]');
const clearBtn = document.querySelector('[data-destroy]');

createBtn.addEventListener('click', onBtnCreateClick);
clearBtn.addEventListener('click', onBtnClearClick);

function onBtnCreateClick() {
  const amount = inputNumber.firstElementChild.value;
  // console.log(amount);
  createBoxes(amount);
}

function onBtnClearClick() {
  boxes.innerHTML = '';
  inputNumber.firstElementChild.value = '';
}

function createBoxes(iterations) {
  let newBoxes = '';

  for (let index = 0; index < iterations; index += 1) {
    const randomHexColor = getRandomHexColor();
    newBoxes += `<div style="background-color: ${randomHexColor}; width:${
      30 + 10 * index
    }px; height:${30 + 10 * index}px;"></div>`;
  }
  console.log(newBoxes);
  boxes.insertAdjacentHTML('afterbegin', newBoxes);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
