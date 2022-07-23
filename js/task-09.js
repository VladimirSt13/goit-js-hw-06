const body = document.querySelector('body');
const changeBgColorBtn = document.querySelector('.change-color');
const colorOutput = document.querySelector('.color');

changeBgColorBtn.addEventListener('click', onBtnChangeColorClick);

function onBtnChangeColorClick() {
  const randomHexColor = getRandomHexColor();
  body.style.backgroundColor = randomHexColor;
  colorOutput.textContent = randomHexColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
