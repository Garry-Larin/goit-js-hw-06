const form = document.querySelector('.login-form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault(); // Відміна перезавантаження сторінки

  const email = form.elements.email.value;
  const password = form.elements.password.value;

  if (email === '' || password === '') {
    alert('Будь ласка, заповніть усі поля форми');
  } else {
    const userData = {
      email,
      password
    };
    console.log(userData);
    form.reset(); // Очищення форми
  }
}

