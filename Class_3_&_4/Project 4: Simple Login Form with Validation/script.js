/*
  Project 4: Simple Login Form with Validation

  Main features:
  1. Validate empty email
  2. Validate email format
  3. Validate empty password
  4. Validate password length
  5. Match demo email and password
  6. Show success or error message
  7. Show/hide password

  This project teaches the base logic of authentication.
*/


/*
  Demo user credentials.

  In a real full-stack project, email and password are checked from backend/database.
  Here we keep fixed values for beginner practice.
*/
const demoUser = {
  email: "student@example.com",
  password: "123456"
};


/*
  Selecting HTML elements using DOM.
*/
const loginForm = document.getElementById("loginForm");

const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

const message = document.getElementById("message");

const togglePassword = document.getElementById("togglePassword");


/*
  Submit event.

  This function runs when user clicks Login button.
*/
loginForm.addEventListener("submit", function (event) {

  /*
    Prevent page refresh after form submit.
  */
  event.preventDefault();


  /*
    Get values from input fields.
    trim() removes extra spaces.
  */
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();


  /*
    Clear old error messages before checking again.
  */
  emailError.innerText = "";
  passwordError.innerText = "";
  message.innerText = "";
  message.className = "";


  /*
    This variable tracks whether the form is valid or not.
    If any validation fails, isValid becomes false.
  */
  let isValid = true;


  /*
    Email validation 1:
    Check empty email.
  */
  if (email === "") {
    emailError.innerText = "Email is required.";
    isValid = false;
  }

  /*
    Email validation 2:
    Check email format.
  */
  else if (!isValidEmail(email)) {
    emailError.innerText = "Please enter a valid email address.";
    isValid = false;
  }


  /*
    Password validation 1:
    Check empty password.
  */
  if (password === "") {
    passwordError.innerText = "Password is required.";
    isValid = false;
  }

  /*
    Password validation 2:
    Check minimum password length.
  */
  else if (password.length < 6) {
    passwordError.innerText = "Password must be at least 6 characters.";
    isValid = false;
  }


  /*
    If validation failed, stop the function.
  */
  if (isValid === false) {
    return;
  }


  /*
    Basic login checking.

    In real apps:
    - frontend sends email/password to backend
    - backend checks database
    - backend returns token or error
  */
  if (email === demoUser.email && password === demoUser.password) {
    message.innerText = "Login successful! Redirecting to dashboard...";
    message.className = "success";

    /*
      Optional redirect idea.

      In a real project, you can redirect to dashboard page:
      window.location.href = "dashboard.html";
    */
  } else {
    message.innerText = "Invalid email or password.";
    message.className = "error";
  }

});


/*
  Function to validate email format.

  This is a simple regular expression.
  It checks:
  - text before @
  - @ symbol
  - text after @
  - dot after domain
*/
function isValidEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return emailPattern.test(email);
}


/*
  Show/hide password feature.
*/
togglePassword.addEventListener("click", function () {

  /*
    If password input type is password,
    change it to text so user can see password.
  */
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    togglePassword.innerText = "Hide";
  }

  /*
    Otherwise, change it back to password.
  */
  else {
    passwordInput.type = "password";
    togglePassword.innerText = "Show";
  }

});