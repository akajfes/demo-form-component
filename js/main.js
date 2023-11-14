const form = document.querySelector("form");
const username = document.getElementById("username");
const password = document.getElementById("password");
const loginSubmit = document.getElementById("loginSubmit");

form.addEventListener('submit', (evt) => {
  evt.preventDefault();

  validateInputs();

  successMsg();
});

const buttonAnimation = () => {
    loginSubmit.classList.add('shake');
}

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error-msg');

  errorDisplay.innerText = message;
  inputControl.classList.add('error');
  inputControl.classList.remove('success');
}

const setSuccess = element => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error-msg');

  errorDisplay.innerText = '';
  inputControl.classList.add('success');
  inputControl.classList.remove('error');
}

const validateInputs = () => {
  const usernameValue = username.value.trim();
  const passwordValue = password.value.trim();

  if(usernameValue === '') {
    setError(username, 'First Name cannot be empty');
    buttonAnimation();
  } else {
    setSuccess(username);
  }

  if(passwordValue === '') {
    setError(password, 'Password cannot be empty');
    buttonAnimation();
  } else {
    setSuccess(password);
  }
}

const successMsg = () => {
  var isSuccess = document.getElementsByClassName('success');
  if (isSuccess.length == 2) {
    form.innerHTML = `
    <div class="thankyou-msg">
      <p>Thank you for signing up! Please check your email to confirm your account.</p>
    </div>
    `
  }
}