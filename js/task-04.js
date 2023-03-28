const counterValue = document.getElementById("value");
const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');
let currentValue = 0;

incrementBtn.addEventListener("click", () => {
  currentValue++;
  counterValue.textContent = currentValue;
});

decrementBtn.addEventListener("click", () => {
  currentValue--;
  counterValue.textContent = currentValue;
});