# Project 8: Quiz App

## Project Overview

This is a beginner-friendly **Quiz App** built using **HTML, CSS, and JavaScript**. The app shows one question at a time, renders multiple-choice options dynamically, checks the selected answer, calculates the score, shows the final result, and allows the user to restart the quiz.

This project helps students understand array of objects, dynamic rendering, score calculation, index tracking, and quiz logic.

---

## Project Objective

The objective of this project is to teach students how to:

- Store quiz questions using an array of objects
- Display one question at a time
- Render answer options dynamically
- Track the current question using an index
- Check correct and wrong answers
- Calculate score and percentage
- Show a final result screen
- Restart the quiz from the beginning

---

## What Students Will Learn

| Topic | Learning |
| --- | --- |
| Array of Objects | Store questions, options, and correct answers |
| Dynamic Rendering | Create option buttons using JavaScript |
| Index Tracking | Use `currentQuestionIndex` to move through questions |
| Score Calculation | Increase score for correct answers |
| Conditional Logic | Show correct/wrong feedback and result messages |
| Quiz Flow | Handle next question, result screen, and restart |

---

## Features

- Shows one question at a time
- Displays question number
- Dynamically renders multiple-choice options
- Checks selected answer
- Highlights correct answer
- Highlights wrong selected answer
- Disables options after one answer
- Requires answer selection before moving next
- Tracks score
- Shows final score and percentage
- Shows performance message
- Restart quiz button
- Responsive design for mobile screens

---

## Folder Structure

```text
Project 8: Quiz App/
├── index.html
├── style.css
├── script.js
└── README.md
```

| File | Purpose |
| --- | --- |
| `index.html` | Creates the quiz container, question area, options area, feedback area, next button, and result box |
| `style.css` | Styles the quiz card, option buttons, feedback states, result card, and responsive layout |
| `script.js` | Handles question data, rendering, answer checking, score calculation, result screen, and restart logic |
| `README.md` | Explains the project |

---

## Technologies Used

- HTML5
- CSS3
- JavaScript

---

## How to Run the Project

1. Open the project folder.
2. Find the `index.html` file.
3. Open `index.html` in any web browser.
4. Select an answer for each question.
5. Click **Next Question** to continue.
6. On the last question, click **Show Result**.
7. Click **Restart Quiz** to start again.

No installation or server is required because this is a static frontend project.

---

## Key JavaScript Concepts Used

```js
array
object
document.getElementById()
addEventListener()
currentQuestionIndex
score
boolean
forEach()
createElement()
appendChild()
querySelectorAll()
classList.add()
if else
Math.round()
innerText
innerHTML
template literals
```

---

## Array of Question Objects

An **array of question objects** means multiple question objects are stored inside one array. Each object contains the question text, answer options, and correct answer.

Example question object:

```js
{
  question: "What does HTML stand for?",
  options: [
    "Hyper Text Markup Language",
    "High Text Machine Language",
    "Hyper Tool Multi Language",
    "Home Text Markup Language"
  ],
  correctAnswer: "Hyper Text Markup Language"
}
```

| Property | Meaning |
| --- | --- |
| `question` | The question text |
| `options` | Array of possible answers |
| `correctAnswer` | The correct option |

This structure is similar to how quiz data comes from APIs or databases in real applications.

---

## Quiz Logic Explanation

### `currentQuestionIndex`

`currentQuestionIndex` tracks which question is currently displayed.

```js
let currentQuestionIndex = 0;
```

Index starts from `0`, so the first question is `quizQuestions[0]`.

### `score`

`score` stores the number of correct answers.

```js
let score = 0;
```

When the user selects the correct answer, the score increases by `1`.

### Option Rendering

The `showQuestion()` function gets the current question, clears old options, loops through the options array using `forEach()`, creates a button for each option using `createElement()`, and adds it to the options container.

### Answer Checking

The `checkAnswer(selectedOption, selectedButton)` function compares the selected option with `currentQuestion.correctAnswer`.

If the answer is correct:

- Score increases
- Selected button gets the `correct` class
- Success feedback is shown

If the answer is wrong:

- Selected button gets the `wrong` class
- Correct answer is highlighted
- Error feedback is shown

### Next Question Logic

When the user clicks **Next Question**, the app first checks if an answer was selected. If not, it shows a warning. If answered, `currentQuestionIndex` increases by `1`.

If more questions are available, the next question is shown. If no questions are left, the result screen is displayed.

### Result Screen

The `showResult()` function hides the question area, calculates percentage, creates a performance message, and shows the final result card.

Percentage formula:

```js
Math.round((score / quizQuestions.length) * 100)
```

### Restart Quiz

The `restartQuiz()` function resets:

- `currentQuestionIndex` to `0`
- `score` to `0`
- `isAnswered` to `false`

Then it shows the first question again.

---

## Full-Stack Connection

This project connects directly to real online exam and quiz platforms.

| This Project Concept | Full-Stack Usage |
| --- | --- |
| Question objects | Question documents in a database |
| Options array | Multiple-choice options from an API |
| Correct answer | Stored answer key in backend |
| Score calculation | Student result generation |
| Result screen | Exam result page |
| Restart quiz | Retake test feature |
| Dynamic rendering | Display questions from API response |

In a full-stack quiz app, questions would come from a backend API and results would be saved in a database.

Example full-stack flow:

```text
Question API -> Frontend Quiz UI -> Answer Checking -> Score Result -> Database Storage -> Student Dashboard
```

Real-world uses:

- Online exam systems
- Quiz platforms
- Course assessment tests
- Student result dashboards
- Admin question management
- Database storage for attempts and scores

---

## Important Interview Questions and Answers

### 1. What is an array of objects?

An array of objects is a collection where each item is an object with related properties.

### 2. Why do we use an array of objects in a quiz app?

Each question has multiple details, such as question text, options, and the correct answer.

### 3. What is `currentQuestionIndex`?

It tracks which question is currently displayed.

### 4. Why does index start from `0`?

JavaScript arrays start counting from `0`, so the first item is at index `0`.

### 5. What is dynamic rendering?

Dynamic rendering means creating and displaying HTML using JavaScript data.

### 6. What is `forEach()` used for?

`forEach()` loops through the options array and creates option buttons.

### 7. What does `querySelectorAll()` do?

It selects all elements that match a CSS selector, such as all option buttons.

### 8. Why do we disable options after selecting an answer?

To prevent the user from selecting multiple answers for the same question.

### 9. How is the score calculated?

The score increases by `1` whenever the selected answer matches the correct answer.

### 10. How does this project connect to full-stack development?

Questions can come from APIs, results can be stored in a database, and scores can be shown in student dashboards.

---

## Learning Outcome

After completing this project, students will understand how to use an array of objects, render questions and options dynamically, track quiz progress with `currentQuestionIndex`, calculate score, show feedback, display a final result, and restart the quiz.

---

## Future Improvements

- Add more questions
- Shuffle questions and options
- Add timer for each question
- Add categories and difficulty levels
- Store high scores in local storage
- Fetch questions from an API
- Save student results in a database
- Add login before starting quiz
- Add admin panel to manage questions
- Convert the project into React

---

## Author

**Made by SK SAHIL**  
**Professional Coding Tutor | Freelance AI Developer**
