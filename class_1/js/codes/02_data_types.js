// 02 - Data Types
// A data type tells us what kind of value we are working with.

const studentName = "Rahul"; // string: text value
const age = 20; // number: numeric value
const isEnrolled = true; // boolean: true or false value
const skills = ["HTML", "CSS", "JavaScript"]; // array: list of values
const student = {
    name: "Rahul",
    course: "Full Stack"
}; // object: related values stored with names

// typeof tells the type of a normal value.
console.log(typeof studentName);
console.log(typeof age);
console.log(typeof isEnrolled);

// Arrays and objects are usually displayed manually for beginners.
const dataList = document.getElementById("dataList");

dataList.innerHTML = `
    <li>Name: ${studentName} (${typeof studentName})</li>
    <li>Age: ${age} (${typeof age})</li>
    <li>Enrolled: ${isEnrolled} (${typeof isEnrolled})</li>
    <li>Skills: ${skills.join(", ")} (array)</li>
    <li>Student Course: ${student.course} (object)</li>
`;
