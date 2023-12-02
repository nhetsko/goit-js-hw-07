'use strict'
document.querySelector('body').style.fontFamily = 'Montserrat';
const formLogin = document.querySelector('.login-form');

formLogin.addEventListener('submit', event => {
  event.preventDefault();
  const formData = {};
  for (const element of formLogin.elements) {
    if (element.name) {
      formData[element.name] = element.value;
    }
  }
  if (formData.email && formData.password) {
    console.log(formData);
    formLogin.reset();
  } else {
    alert('All form fields must be filled in');
  }
});