const refs = {
  loginForm: document.querySelector('.login-form')
}

refs.loginForm.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();
  const formElements = event.currentTarget.elements;
  const emailValue = formElements.email.value.trim();
  const passwordValue = formElements.password.value.trim();
  const dataForm = {
    emailForm: emailValue,
    passwordForm: passwordValue,
  }

  if(emailValue  === '' || passwordValue === ''){
      alert('Please, fill in all fields!')
    } else {
      console.log(dataForm);
    };
    refs.loginForm.reset();
  return;
};
