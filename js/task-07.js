const fontSizeControl = document.querySelector('#font-size-control');
const spanText = document.querySelector('#text');

spanText.style.fontSize = fontSizeControl.value + 'px';

fontSizeControl.addEventListener('input', onChangefontSizeControl);

function onChangefontSizeControl(event) {
  spanText.style.fontSize = event.currentTarget.value + 'px';
}
