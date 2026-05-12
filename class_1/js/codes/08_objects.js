// 08 - Objects
// An object stores related data using key-value pairs.
// A key is the name of the data.
// A value is the actual data.

const student = {
    name: "Meera",
    role: "Frontend Learner",
    course: "Full Stack Web Development",
    city: "Kolkata"
};

// We use dot notation to read values from an object.
const studentName = student.name;
const studentRole = student.role;

document.getElementById("profile").innerHTML = `
    <h2>${studentName}</h2>
    <p>Role: ${studentRole}</p>
    <p>Course: ${student.course}</p>
    <p>City: ${student.city}</p>
`;

console.log("Student Object:", student);
console.log("Student Name:", student.name);
