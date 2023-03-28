const input = document.querySelector('#validation-input');

input.addEventListener('blur', handleInputBlur);

function handleInputBlur(event) {
  const inputLength = event.target.value.length;
  const requiredLength = event.target.getAttribute('data-length');

  if (inputLength === parseInt(requiredLength)) {
    input.classList.remove('invalid');
    input.classList.add('valid');
  } else {
    input.classList.remove('valid');
    input.classList.add('invalid');
  }
}
