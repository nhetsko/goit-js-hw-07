'use strict'

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


function changeColor() {
    const randomColor = getRandomHexColor();
    document.body.style.background = randomColor;
    document.querySelector('.color').textContent = randomColor;
}

const button = document.querySelector('.change-color');
button.addEventListener('click', changeColor);

 