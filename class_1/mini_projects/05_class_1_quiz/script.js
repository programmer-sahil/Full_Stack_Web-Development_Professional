// Questions are stored in an array of objects.
// This prepares students for React props, state, and list rendering.
const questions = [
    {
        question: "What is the main purpose of HTML?",
        options: ["To style a webpage", "To structure webpage content", "To store database records", "To run a server"],
        answer: "To structure webpage content"
    },
    {
        question: "Which heading tag is usually the most important heading?",
        options: ["h1", "h3", "h5", "p"],
        answer: "h1"
    },
    {
        question: "Which HTML tag is used to create a link?",
        options: ["img", "a", "link", "button"],
        answer: "a"
    },
    {
        question: "Which HTML tag is used to display an image?",
        options: ["picture-text", "image", "img", "src"],
        answer: "img"
    },
    {
        question: "Which tag is used to collect user input?",
        options: ["form", "table", "footer", "nav"],
        answer: "form"
    },
    {
        question: "Which of these is a semantic HTML tag?",
        options: ["section", "blue", "bold", "container"],
        answer: "section"
    },
    {
        question: "What does a CSS selector do?",
        options: ["Selects HTML elements to style", "Creates a database", "Starts a server", "Stores passwords"],
        answer: "Selects HTML elements to style"
    },
    {
        question: "Which symbol is used to select a class in CSS?",
        options: ["#", ".", "@", "$"],
        answer: "."
    },
    {
        question: "Which symbol is used to select an ID in CSS?",
        options: [".", "#", "*", "&"],
        answer: "#"
    },
    {
        question: "Which parts belong to the CSS box model?",
        options: ["Content, padding, border, margin", "Array, object, string, number", "Header, main, footer, nav", "Click, submit, input, change"],
        answer: "Content, padding, border, margin"
    },
    {
        question: "What is flexbox commonly used for?",
        options: ["Arranging items in a row or column", "Saving data forever", "Creating image files", "Writing HTML tags"],
        answer: "Arranging items in a row or column"
    },
    {
        question: "Which tag connects an external CSS file to HTML?",
        options: ["script", "style", "link", "css"],
        answer: "link"
    },
    {
        question: "What is a JavaScript variable used for?",
        options: ["Storing data", "Adding only images", "Writing CSS selectors", "Creating folders"],
        answer: "Storing data"
    },
    {
        question: "Which keyword is good for a value that should not be reassigned?",
        options: ["var", "const", "loop", "if"],
        answer: "const"
    },
    {
        question: "What is a function in JavaScript?",
        options: ["A reusable block of code", "A CSS color", "An HTML image", "A browser tab"],
        answer: "A reusable block of code"
    },
    {
        question: "Which data type stores multiple values in order?",
        options: ["Array", "String", "Boolean", "Number"],
        answer: "Array"
    },
    {
        question: "Which data type stores related key-value data?",
        options: ["Object", "Number", "Boolean", "Tag"],
        answer: "Object"
    },
    {
        question: "What does addEventListener() help us do?",
        options: ["Run code after a user action", "Create only CSS files", "Delete all HTML", "Change the browser name"],
        answer: "Run code after a user action"
    },
    {
        question: "What is the DOM?",
        options: ["A browser representation of the webpage", "A CSS framework", "A hosting server", "A design image"],
        answer: "A browser representation of the webpage"
    },
    {
        question: "What can localStorage do?",
        options: ["Store small data in the browser", "Style buttons", "Create HTML headings", "Send emails"],
        answer: "Store small data in the browser"
    }
];

// These variables select important elements from the DOM.
const quizForm = document.getElementById("quizForm");
const questionsContainer = document.getElementById("questionsContainer");
const resultPanel = document.getElementById("resultPanel");
const resetButton = document.getElementById("resetButton");
const bestScoreText = document.getElementById("bestScore");
const questionCount = document.getElementById("questionCount");

// This function renders all questions on the page.
function renderQuestions() {
    questionsContainer.innerHTML = "";

    questions.forEach(function (item, questionIndex) {
        const optionsHtml = item.options.map(function (option) {
            return `
                <label class="option" data-question="${questionIndex}" data-option="${option}">
                    <input type="radio" name="question${questionIndex}" value="${option}">
                    ${option}
                </label>
            `;
        }).join("");

        questionsContainer.innerHTML += `
            <section class="question-card" id="questionCard${questionIndex}">
                <h2>${questionIndex + 1}. ${item.question}</h2>
                ${optionsHtml}
                <p class="feedback" id="feedback${questionIndex}"></p>
            </section>
        `;
    });

    questionCount.textContent = "Questions: " + questions.length;
}

// This function shows the best score saved in localStorage.
function showBestScore() {
    const bestScore = localStorage.getItem("classOneBestScore");

    if (bestScore) {
        bestScoreText.textContent = "Best Score: " + bestScore + " / " + questions.length;
    } else {
        bestScoreText.textContent = "Best Score: Not attempted yet";
    }
}

// This function checks selected answers and shows correct or wrong feedback.
function checkQuiz(event) {
    event.preventDefault();

    let score = 0;

    questions.forEach(function (item, questionIndex) {
        const selectedAnswer = document.querySelector(`input[name="question${questionIndex}"]:checked`);
        const feedback = document.getElementById(`feedback${questionIndex}`);
        const options = document.querySelectorAll(`[data-question="${questionIndex}"]`);

        options.forEach(function (optionLabel) {
            optionLabel.classList.remove("correct", "wrong");

            if (optionLabel.dataset.option === item.answer) {
                optionLabel.classList.add("correct");
            }
        });

        if (!selectedAnswer) {
            feedback.textContent = "Not answered. Correct answer: " + item.answer;
            feedback.className = "feedback wrong-text";
            return;
        }

        if (selectedAnswer.value === item.answer) {
            score++;
            feedback.textContent = "Correct answer.";
            feedback.className = "feedback correct-text";
        } else {
            const selectedLabel = document.querySelector(
                `[data-question="${questionIndex}"][data-option="${selectedAnswer.value}"]`
            );

            selectedLabel.classList.add("wrong");
            feedback.textContent = "Wrong answer. Correct answer: " + item.answer;
            feedback.className = "feedback wrong-text";
        }
    });

    // This block stores the best score in localStorage.
    const previousBest = Number(localStorage.getItem("classOneBestScore")) || 0;
    if (score > previousBest) {
        localStorage.setItem("classOneBestScore", score);
    }

    resultPanel.innerHTML = `
        <h2>Result</h2>
        <p>Your score is <strong>${score}</strong> out of <strong>${questions.length}</strong>.</p>
        <p>Review the highlighted answers above, then retry for better practice.</p>
    `;

    showBestScore();
}

// This function resets the quiz for another attempt.
function resetQuiz() {
    quizForm.reset();

    document.querySelectorAll(".option").forEach(function (option) {
        option.classList.remove("correct", "wrong");
    });

    document.querySelectorAll(".feedback").forEach(function (feedback) {
        feedback.textContent = "";
        feedback.className = "feedback";
    });

    resultPanel.innerHTML = `
        <h2>Result</h2>
        <p>Submit the quiz to see your score.</p>
    `;
}

// These event listeners connect user actions with functions.
quizForm.addEventListener("submit", checkQuiz);
resetButton.addEventListener("click", resetQuiz);

// These functions run when the page loads.
renderQuestions();
showBestScore();
