function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const boxesContainer = document.querySelector('#boxes');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const input = document.querySelector('input[type="number"]');

function createBoxes(amount) {
  let size = 30;
  for (let i = 0; i < amount; i += 1) {
    const newBox = document.createElement('div');
    newBox.style.width = `${size}px`;
    newBox.style.height = `${size}px`;
    newBox.style.backgroundColor = getRandomHexColor();
    boxesContainer.appendChild(newBox);
    size += 10;
  }
}

function destroyBoxes() {
  boxesContainer.innerHTML = '';
}


createBtn.addEventListener('click', () => {
  const amount = input.value;
  createBoxes(amount);
});

destroyBtn.addEventListener('click', destroyBoxes);
