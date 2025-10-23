// Get form elements
const form = document.getElementById('registerForm');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const submitButton = form.querySelector('button');

// Error message elements
const usernameError = document.getElementById('usernameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const confirmPasswordError = document.getElementById('confirmPasswordError');

// Validation flags
let usernameValid = false;
let emailValid = false;
let passwordValid = false;
let confirmPasswordValid = false;

// Username validation
username.addEventListener('input', () => {
  if (username.value.trim().length >= 3) {
    usernameValid = true;
    username.classList.add('valid');
    username.classList.remove('invalid');
    usernameError.textContent = '';
  } else {
    usernameValid = false;
    username.classList.add('invalid');
    username.classList.remove('valid');
    usernameError.textContent = 'Username must be at least 3 characters long.';
  }
  toggleSubmitButton();
});

// Email validation
email.addEventListener('input', () => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailPattern.test(email.value.trim())) {
    emailValid = true;
    email.classList.add('valid');
    email.classList.remove('invalid');
    emailError.textContent = '';
  } else {
    emailValid = false;
    email.classList.add('invalid');
    email.classList.remove('valid');
    emailError.textContent = 'Please enter a valid email address.';
  }
  toggleSubmitButton();
});

// Password validation
password.addEventListener('input', () => {
  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{8,}$/;
  if (passwordPattern.test(password.value)) {
    passwordValid = true;
    password.classList.add('valid');
    password.classList.remove('invalid');
    passwordError.textContent = '';
  } else {
    passwordValid = false;
    password.classList.add('invalid');
    password.classList.remove('valid');
    passwordError.textContent = 'Password must have 8+ chars, one uppercase, one lowercase, and one special char.';
  }
  validateConfirmPassword();
  toggleSubmitButton();
});

// Confirm password validation
confirmPassword.addEventListener('input', () => {
  validateConfirmPassword();
  toggleSubmitButton();
});

function validateConfirmPassword() {
  if (confirmPassword.value === password.value && passwordValid) {
    confirmPasswordValid = true;
    confirmPassword.classList.add('valid');
    confirmPassword.classList.remove('invalid');
    confirmPasswordError.textContent = '';
  } else {
    confirmPasswordValid = false;
    confirmPassword.classList.add('invalid');
    confirmPassword.classList.remove('valid');
    confirmPasswordError.textContent = 'Passwords do not match.';
  }
}

// Enable/disable submit button
function toggleSubmitButton() {
  if (usernameValid && emailValid && passwordValid && confirmPasswordValid) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
}

// Prevent form submission (for demo purposes)
form.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Form submitted successfully!');
});