// 04 - Conditions
// Conditions help JavaScript make decisions.
// if, else if, and else run different code based on a condition.

const score = 76;
let resultMessage = "";

if (score >= 80) {
    resultMessage = "Excellent work!";
} else if (score >= 50) {
    resultMessage = "Good job. Keep practicing.";
} else {
    resultMessage = "Revise the basics and try again.";
}

// The final message depends on the score.
document.getElementById("message").textContent = resultMessage;

console.log("Score:", score);
console.log("Result:", resultMessage);
