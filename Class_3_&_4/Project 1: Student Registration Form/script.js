/*
  Student Registration Form Project

  Main work of this file:
  1. Select the form
  2. Get user input values
  3. Validate empty fields
  4. Create a student object
  5. Show student details on the page
  6. Reset the form
*/


// Selecting the form using its id
const studentForm = document.getElementById("studentForm");

// Selecting the error message paragraph
const errorMessage = document.getElementById("errorMessage");

// Selecting the output div where student details will be shown
const studentOutput = document.getElementById("studentOutput");


/*
  addEventListener listens for an event.

  Here, we are listening for the "submit" event.
  This function will run when the user clicks the Register Student button.
*/
studentForm.addEventListener("submit", function (event) {

  /*
    By default, form submission reloads the page.

    event.preventDefault() stops the page from refreshing.
    This is very important in JavaScript form handling.
  */
  event.preventDefault();


  /*
    Getting input values from the form.

    .value is used to collect the text typed by the user.
    .trim() removes extra spaces from start and end.
  */
  const name = document.getElementById("studentName").value.trim();
  const email = document.getElementById("studentEmail").value.trim();
  const phone = document.getElementById("studentPhone").value.trim();
  const course = document.getElementById("studentCourse").value.trim();
  const age = document.getElementById("studentAge").value.trim();
  const gender = document.getElementById("studentGender").value;


  /*
    Basic validation.

    This checks whether any field is empty.
    If any field is empty, we show an error message and stop the function.
  */
  if (
    name === "" ||
    email === "" ||
    phone === "" ||
    course === "" ||
    age === "" ||
    gender === ""
  ) {
    errorMessage.innerText = "Please fill in all fields.";
    studentOutput.innerHTML = "";
    return;
  }


  /*
    Phone number validation.

    isNaN(phone) checks if phone contains non-number values.
    phone.length < 10 checks whether number is too short.
  */
  if (isNaN(phone) || phone.length < 10) {
    errorMessage.innerText = "Please enter a valid phone number.";
    studentOutput.innerHTML = "";
    return;
  }


  /*
    Age validation.

    Number(age) converts age from string to number.
  */
  if (Number(age) < 5 || Number(age) > 100) {
    errorMessage.innerText = "Please enter a valid age between 5 and 100.";
    studentOutput.innerHTML = "";
    return;
  }


  /*
    If all validations pass, clear the error message.
  */
  errorMessage.innerText = "";


  /*
    Creating a student object.

    Objects store data in key-value pairs.
    This is very important for full-stack development.
  */
  const student = {
    name: name,
    email: email,
    phone: phone,
    course: course,
    age: age,
    gender: gender
  };


  /*
    Showing student data on the page.

    innerHTML allows us to insert HTML code using JavaScript.
    Template literals use backticks ` `.
    ${student.name} is used to insert dynamic values.
  */
  studentOutput.innerHTML = `
    <div class="student-card">
      <h2>Registration Successful</h2>

      <p><strong>Name:</strong> ${student.name}</p>
      <p><strong>Email:</strong> ${student.email}</p>
      <p><strong>Phone:</strong> ${student.phone}</p>
      <p><strong>Course:</strong> ${student.course}</p>
      <p><strong>Age:</strong> ${student.age}</p>
      <p><strong>Gender:</strong> ${student.gender}</p>
    </div>
  `;


  /*
    reset() clears all input fields after successful submission.
  */
  studentForm.reset();

});