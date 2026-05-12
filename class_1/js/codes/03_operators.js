// 03 - Operators
// Operators are symbols that perform actions on values.
// Example: + adds values, >= compares values.

const htmlMarks = 80;
const cssMarks = 85;

// Arithmetic operator: + adds two numbers.
const totalMarks = htmlMarks + cssMarks;

// Comparison operator: >= checks if left side is greater than or equal to right side.
const isPassed = totalMarks >= 100;

// Template literals use backticks (`) and ${} to place variables inside text.
document.getElementById("result").innerHTML = `
    <p>HTML Marks: ${htmlMarks}</p>
    <p>CSS Marks: ${cssMarks}</p>
    <p>Total Marks: ${totalMarks}</p>
    <p>Passed: ${isPassed}</p>
`;

console.log("Total Marks:", totalMarks);
console.log("Passed:", isPassed);
