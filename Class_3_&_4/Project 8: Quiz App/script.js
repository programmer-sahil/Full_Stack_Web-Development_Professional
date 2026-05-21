/*
  Project 8: Quiz App

  Main features:
  1. Show one question at a time
  2. Display multiple options
  3. Check selected answer
  4. Increase score for correct answer
  5. Move to next question
  6. Show final score
  7. Restart quiz

  This project is very important because it teaches:
  - array of objects
  - dynamic rendering
  - index tracking
  - conditional logic
  - score calculation
*/


/*
  Quiz questions array.

  Each question is an object.

  Every question object contains:
  1. question
  2. options
  3. correctAnswer
*/
const quizQuestions = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Hyper Tool Multi Language",
      "Home Text Markup Language"
    ],
    correctAnswer: "Hyper Text Markup Language"
  },
  {
    question: "Which CSS property is used to change text color?",
    options: [
      "font-color",
      "text-color",
      "color",
      "background-color"
    ],
    correctAnswer: "color"
  },
  {
    question: "Which keyword is used to declare a constant variable in JavaScript?",
    options: [
      "let",
      "var",
      "const",
      "static"
    ],
    correctAnswer: "const"
  },
  {
    question: "Which method is used to select an element by id in JavaScript?",
    options: [
      "document.querySelectorAll()",
      "document.getElementById()",
      "document.getElementsByClassName()",
      "document.createElement()"
    ],
    correctAnswer: "document.getElementById()"
  },
  {
    question: "Which array method is commonly used to create a new filtered array?",
    options: [
      "forEach()",
      "push()",
      "filter()",
      "pop()"
    ],
    correctAnswer: "filter()"
  }
];


/*
  Selecting HTML elements.
*/
const questionNumber = document.getElementById("questionNumber");
const questionText = document.getElementById("questionText");
const optionsContainer = document.getElementById("optionsContainer");
const feedbackMessage = document.getElementById("feedbackMessage");
const nextBtn = document.getElementById("nextBtn");
const resultBox = document.getElementById("resultBox");


/*
  currentQuestionIndex tracks which question is currently displayed.

  Index starts from 0.
  So first question is quizQuestions[0].
*/
let currentQuestionIndex = 0;


/*
  score stores the number of correct answers.
*/
let score = 0;


/*
  This variable checks whether user has selected an option or not.
*/
let isAnswered = false;


/*
  Next button event.

  When user clicks Next Question, show next question.
*/
nextBtn.addEventListener("click", function () {

  /*
    If user has not selected an answer, show warning.
  */
  if (isAnswered === false) {
    feedbackMessage.innerText = "Please select an answer first.";
    feedbackMessage.className = "error";
    return;
  }

  /*
    Move to next question.
  */
  currentQuestionIndex++;

  /*
    If more questions are available, show next question.
    Otherwise, show final result.
  */
  if (currentQuestionIndex < quizQuestions.length) {
    showQuestion();
  } else {
    showResult();
  }
});


/*
  Function to display current question.
*/
function showQuestion() {

  /*
    Reset answered status for new question.
  */
  isAnswered = false;

  /*
    Clear old feedback and result.
  */
  feedbackMessage.innerText = "";
  feedbackMessage.className = "";
  resultBox.innerHTML = "";

  /*
    Enable next button.
  */
  nextBtn.disabled = false;

  /*
    Get current question object.
  */
  const currentQuestion = quizQuestions[currentQuestionIndex];

  /*
    Display question number.
    +1 is used because index starts from 0.
  */
  questionNumber.innerText = `Question ${currentQuestionIndex + 1} of ${quizQuestions.length}`;

  /*
    Display question text.
  */
  questionText.innerText = currentQuestion.question;

  /*
    Clear old options.
  */
  optionsContainer.innerHTML = "";

  /*
    Loop through options and create option buttons.
  */
  currentQuestion.options.forEach(function (option) {

    /*
      Create button element for each option.
    */
    const optionButton = document.createElement("button");

    /*
      Add CSS class.
    */
    optionButton.className = "option-btn";

    /*
      Set option text.
    */
    optionButton.innerText = option;

    /*
      When option is clicked, check answer.
    */
    optionButton.addEventListener("click", function () {
      checkAnswer(option, optionButton);
    });

    /*
      Add button inside options container.
    */
    optionsContainer.appendChild(optionButton);
  });

  /*
    Change next button text for last question.
  */
  if (currentQuestionIndex === quizQuestions.length - 1) {
    nextBtn.innerText = "Show Result";
  } else {
    nextBtn.innerText = "Next Question";
  }
}


/*
  Function to check selected answer.
*/
function checkAnswer(selectedOption, selectedButton) {

  /*
    If already answered, do not allow again.
  */
  if (isAnswered === true) {
    return;
  }

  /*
    Mark question as answered.
  */
  isAnswered = true;

  /*
    Get current question.
  */
  const currentQuestion = quizQuestions[currentQuestionIndex];

  /*
    Select all option buttons.
  */
  const allOptionButtons = document.querySelectorAll(".option-btn");

  /*
    Disable all option buttons after one answer.
  */
  allOptionButtons.forEach(function (button) {
    button.disabled = true;
  });

  /*
    Check whether selected option is correct.
  */
  if (selectedOption === currentQuestion.correctAnswer) {

    /*
      Increase score by 1.
    */
    score++;

    /*
      Add correct CSS class.
    */
    selectedButton.classList.add("correct");

    /*
      Show success feedback.
    */
    feedbackMessage.innerText = "Correct answer!";
    feedbackMessage.className = "success";
  } else {

    /*
      Add wrong CSS class to selected answer.
    */
    selectedButton.classList.add("wrong");

    /*
      Show error feedback.
    */
    feedbackMessage.innerText = `Wrong answer! Correct answer is: ${currentQuestion.correctAnswer}`;
    feedbackMessage.className = "error";

    /*
      Highlight correct answer also.
    */
    allOptionButtons.forEach(function (button) {
      if (button.innerText === currentQuestion.correctAnswer) {
        button.classList.add("correct");
      }
    });
  }
}


/*
  Function to show final result.
*/
function showResult() {

  /*
    Hide quiz question and options.
  */
  questionNumber.innerText = "";
  questionText.innerText = "";
  optionsContainer.innerHTML = "";
  feedbackMessage.innerText = "";
  feedbackMessage.className = "";

  /*
    Hide next button.
  */
  nextBtn.style.display = "none";

  /*
    Calculate percentage.
  */
  const percentage = Math.round((score / quizQuestions.length) * 100);

  /*
    Decide performance message.
  */
  let performanceMessage = "";

  if (percentage >= 80) {
    performanceMessage = "Excellent performance!";
  } else if (percentage >= 60) {
    performanceMessage = "Good job! Keep practicing.";
  } else if (percentage >= 40) {
    performanceMessage = "Average score. Revise the basics.";
  } else {
    performanceMessage = "Needs improvement. Practice more.";
  }

  /*
    Show result card.
  */
  resultBox.innerHTML = `
    <div class="final-result">
      <h2>Quiz Completed</h2>

      <p><strong>Your Score:</strong> ${score} out of ${quizQuestions.length}</p>
      <p><strong>Percentage:</strong> ${percentage}%</p>
      <p><strong>Result:</strong> ${performanceMessage}</p>

      <button class="restart-btn" onclick="restartQuiz()">
        Restart Quiz
      </button>
    </div>
  `;
}


/*
  Function to restart quiz.
*/
function restartQuiz() {

  /*
    Reset variables.
  */
  currentQuestionIndex = 0;
  score = 0;
  isAnswered = false;

  /*
    Show next button again.
  */
  nextBtn.style.display = "block";

  /*
    Show first question again.
  */
  showQuestion();
}


/*
  Start quiz when page loads.
*/
showQuestion();