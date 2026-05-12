// 07 - Arrays
// An array stores multiple values in one variable.
// Array values are written inside square brackets [].

const skills = ["HTML", "CSS", "JavaScript"];
const skillsBox = document.getElementById("skills");

// Add one more item to the end of the array.
skills.push("React");

// for...of gives us one value from the array at a time.
for (let skill of skills) {
    skillsBox.innerHTML += `<span class="tag">${skill}</span>`;
}

console.log("All Skills:", skills);
console.log("First Skill:", skills[0]);
