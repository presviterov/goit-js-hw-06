const bodyCheck = document.querySelector('body');
const spanColor = document.querySelector('.color');
const butColor = document.querySelector('.change-color');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const handleClick = (event) => {
  bodyCheck.style.backgroundColor = getRandomHexColor();
  spanColor.textContent = getRandomHexColor();
};

butColor.addEventListener('click', handleClick);