function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonRef = document.querySelector('.change-color');
const spanText = document.querySelector('.color');

buttonRef.addEventListener('click', onChangeColor,)

function onChangeColor(event) {
  spanText.textContent = document.body.style.backgroundColor = getRandomHexColor();
}