const input = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

input.addEventListener('input', handleInputChange);

function handleInputChange(event) {
  const fontSize = event.target.value + 'px';
  text.style.fontSize = fontSize;
}

const initialFontSize = input.value + 'px';
text.style.fontSize = initialFontSize;
