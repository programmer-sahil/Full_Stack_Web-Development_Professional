/*
  Project 5: Student Management CRUD App

  CRUD means:
  C = Create
  R = Read
  U = Update
  D = Delete

  In this project:
  Create = Add a new student
  Read   = Show all students in the table
  Update = Edit student details
  Delete = Remove student from the table

  This is one of the most important projects before React and full-stack.
*/


/*
  Selecting form and input elements.
*/
const studentForm = document.getElementById("studentForm");

const studentIdInput = document.getElementById("studentId");
const studentNameInput = document.getElementById("studentName");
const studentEmailInput = document.getElementById("studentEmail");
const studentPhoneInput = document.getElementById("studentPhone");
const studentCourseInput = document.getElementById("studentCourse");
const studentAgeInput = document.getElementById("studentAge");

/*
  Selecting display elements.
*/
const studentTableBody = document.getElementById("studentTableBody");
const studentCount = document.getElementById("studentCount");
const message = document.getElementById("message");
const searchInput = document.getElementById("searchInput");

/*
  Selecting buttons and headings.
*/
const submitBtn = document.getElementById("submitBtn");
const cancelBtn = document.getElementById("cancelBtn");
const formTitle = document.getElementById("formTitle");


/*
  students array stores all student records.

  Each student will look like this:

  {
    id: 12345,
    name: "Sahil",
    email: "sahil@example.com",
    phone: "9876543210",
    course: "JavaScript",
    age: 22
  }
*/
let students = [];


/*
  Form submit event.

  This function runs when user clicks:
  - Add Student
  - Update Student
*/
studentForm.addEventListener("submit", function (event) {

  /*
    Stop page refresh after form submit.
  */
  event.preventDefault();

  /*
    Get input values from the form.
  */
  const id = studentIdInput.value;
  const name = studentNameInput.value.trim();
  const email = studentEmailInput.value.trim();
  const phone = studentPhoneInput.value.trim();
  const course = studentCourseInput.value;
  const age = studentAgeInput.value.trim();

  /*
    Validate form data.
    If validation fails, stop the function.
  */
  if (!validateForm(name, email, phone, course, age)) {
    return;
  }

  /*
    If id is empty, it means we are adding a new student.
    If id has value, it means we are updating an existing student.
  */
  if (id === "") {
    addStudent(name, email, phone, course, age);
  } else {
    updateStudent(Number(id), name, email, phone, course, age);
  }

  /*
    Reset form after add/update.
  */
  resetForm();

  /*
    Show updated student list.
  */
  renderStudents(students);
});


/*
  Search input event.

  Whenever user types in search box, filterStudents() will run.
*/
searchInput.addEventListener("input", filterStudents);


/*
  Cancel edit button event.

  It returns the form back to Add mode.
*/
cancelBtn.addEventListener("click", resetForm);


/*
  Function to validate form input.
*/
function validateForm(name, email, phone, course, age) {

  /*
    Clear old message first.
  */
  message.innerText = "";
  message.className = "";

  /*
    Check empty fields.
  */
  if (
    name === "" ||
    email === "" ||
    phone === "" ||
    course === "" ||
    age === ""
  ) {
    showMessage("Please fill in all fields.", "error");
    return false;
  }

  /*
    Name must be at least 3 characters.
  */
  if (name.length < 3) {
    showMessage("Student name must be at least 3 characters.", "error");
    return false;
  }

  /*
    Email format validation.
  */
  if (!isValidEmail(email)) {
    showMessage("Please enter a valid email address.", "error");
    return false;
  }

  /*
    Phone number validation.
    Here we are checking exactly 10 digits.
  */
  if (!/^[0-9]{10}$/.test(phone)) {
    showMessage("Phone number must be exactly 10 digits.", "error");
    return false;
  }

  /*
    Age validation.
  */
  if (Number(age) < 10 || Number(age) > 80) {
    showMessage("Age must be between 10 and 80.", "error");
    return false;
  }

  /*
    If all validations pass, return true.
  */
  return true;
}


/*
  Function to validate email format.
*/
function isValidEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return emailPattern.test(email);
}


/*
  Function to add a new student.

  This is CREATE operation.
*/
function addStudent(name, email, phone, course, age) {

  /*
    Create new student object.
    Date.now() is used as a simple unique id.
  */
  const newStudent = {
    id: Date.now(),
    name: name,
    email: email,
    phone: phone,
    course: course,
    age: Number(age)
  };

  /*
    Push new student into students array.
  */
  students.push(newStudent);

  /*
    Show success message.
  */
  showMessage("Student added successfully.", "success");
}


/*
  Function to show students in table.

  This is READ operation.
*/
function renderStudents(studentList) {

  /*
    Clear old table rows.
  */
  studentTableBody.innerHTML = "";

  /*
    Update total student count.
  */
  studentCount.innerText = `Total Students: ${studentList.length}`;

  /*
    If no student exists, show empty row.
  */
  if (studentList.length === 0) {
    studentTableBody.innerHTML = `
      <tr>
        <td colspan="6" class="empty-row">
          No students found.
        </td>
      </tr>
    `;
    return;
  }

  /*
    Loop through student list and create table rows.
  */
  studentList.forEach(function (student) {

    /*
      Create table row.
    */
    const row = document.createElement("tr");

    /*
      Insert student data into row.
    */
    row.innerHTML = `
      <td>${student.name}</td>
      <td>${student.email}</td>
      <td>${student.phone}</td>
      <td>${student.course}</td>
      <td>${student.age}</td>
      <td>
        <div class="action-buttons">
          <button class="edit-btn" onclick="editStudent(${student.id})">
            Edit
          </button>

          <button class="delete-btn" onclick="deleteStudent(${student.id})">
            Delete
          </button>
        </div>
      </td>
    `;

    /*
      Add row to table body.
    */
    studentTableBody.appendChild(row);
  });
}


/*
  Function to edit a student.

  This does not update immediately.
  It first fills the selected student's data into the form.
*/
function editStudent(id) {

  /*
    Find selected student by id.
  */
  const selectedStudent = students.find(function (student) {
    return student.id === id;
  });

  /*
    If student is not found, stop function.
  */
  if (!selectedStudent) {
    showMessage("Student not found.", "error");
    return;
  }

  /*
    Fill form fields with selected student data.
  */
  studentIdInput.value = selectedStudent.id;
  studentNameInput.value = selectedStudent.name;
  studentEmailInput.value = selectedStudent.email;
  studentPhoneInput.value = selectedStudent.phone;
  studentCourseInput.value = selectedStudent.course;
  studentAgeInput.value = selectedStudent.age;

  /*
    Change form mode from Add to Edit.
  */
  formTitle.innerText = "Edit Student";
  submitBtn.innerText = "Update Student";
  cancelBtn.style.display = "block";

  /*
    Show message.
  */
  showMessage("Edit mode activated. Update the student details.", "success");
}


/*
  Function to update student.

  This is UPDATE operation.
*/
function updateStudent(id, name, email, phone, course, age) {

  /*
    map() creates a new updated array.

    If student id matches, replace old data with updated data.
  */
  students = students.map(function (student) {
    if (student.id === id) {
      return {
        id: id,
        name: name,
        email: email,
        phone: phone,
        course: course,
        age: Number(age)
      };
    }

    return student;
  });

  /*
    Show success message.
  */
  showMessage("Student updated successfully.", "success");
}


/*
  Function to delete student.

  This is DELETE operation.
*/
function deleteStudent(id) {

  /*
    Confirm before deleting.
    confirm() returns true if user clicks OK.
  */
  const confirmDelete = confirm("Are you sure you want to delete this student?");

  if (!confirmDelete) {
    return;
  }

  /*
    filter() creates a new array without selected student.
  */
  students = students.filter(function (student) {
    return student.id !== id;
  });

  /*
    If deleted student was in edit mode, reset form.
  */
  resetForm();

  /*
    Show updated table.
  */
  renderStudents(students);

  /*
    Show success message.
  */
  showMessage("Student deleted successfully.", "success");
}


/*
  Function to filter students by search input.
*/
function filterStudents() {

  /*
    Get search text and convert to lowercase.
  */
  const searchText = searchInput.value.toLowerCase();

  /*
    Filter students by name, email, or course.
  */
  const filteredStudents = students.filter(function (student) {
    return (
      student.name.toLowerCase().includes(searchText) ||
      student.email.toLowerCase().includes(searchText) ||
      student.course.toLowerCase().includes(searchText)
    );
  });

  /*
    Show filtered students.
  */
  renderStudents(filteredStudents);
}


/*
  Function to reset form.
*/
function resetForm() {

  /*
    Clear all input fields.
  */
  studentForm.reset();

  /*
    Clear hidden id field.
  */
  studentIdInput.value = "";

  /*
    Change form back to Add mode.
  */
  formTitle.innerText = "Add New Student";
  submitBtn.innerText = "Add Student";
  cancelBtn.style.display = "none";
}


/*
  Function to show success/error messages.
*/
function showMessage(text, type) {
  message.innerText = text;
  message.className = type;
}


/*
  Show empty table when page first loads.
*/
renderStudents(students);