# Project 2: To-Do List App

## Project Overview

This is a beginner-friendly **To-Do List App** built using **HTML, CSS, and JavaScript**. The app allows users to add tasks, view all tasks, mark tasks as complete, undo completed tasks, and delete tasks.

This project introduces students to basic **CRUD operations** using an array of objects and dynamic DOM rendering.

---

## Project Objective

The objective of this project is to teach students how to:

- Store multiple tasks using a JavaScript array
- Represent each task as an object
- Add new data to an array
- Display array data dynamically on the webpage
- Update task completion status
- Delete tasks from the list

---

## What Students Will Learn

| Topic | Learning |
| --- | --- |
| Arrays | Store multiple task objects |
| Objects | Store task details like `id`, `text`, and `completed` |
| DOM Selection | Select input, button, message, and task list elements |
| Event Handling | Add tasks using button click and Enter key |
| DOM Rendering | Display tasks dynamically from JavaScript data |
| CRUD Logic | Create, Read, Update, and Delete task data |

---

## Features

- Add a new task
- Add task by clicking the button
- Add task by pressing Enter
- Show an error message for empty input
- Display all tasks dynamically
- Mark a task as complete
- Undo a completed task
- Delete a task
- Show an empty message when no tasks exist
- Responsive design for mobile screens

---

## Folder Structure

```text
Project 2: To-Do List App/
├── index.html
├── style.css
├── script.js
└── README.md
```

| File | Purpose |
| --- | --- |
| `index.html` | Creates the app structure, input field, button, and task list area |
| `style.css` | Adds layout, colors, task item styles, buttons, and responsive design |
| `script.js` | Handles task creation, rendering, completion, deletion, and validation |
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
4. Type a task in the input box.
5. Click **Add Task** or press **Enter**.
6. Use **Done**, **Undo**, and **Delete** buttons to manage tasks.

No installation or server is required because this is a static frontend project.

---

## Key JavaScript Concepts Used

```js
document.getElementById()
addEventListener()
event.key
.value
.trim()
Date.now()
array
object
push()
forEach()
map()
filter()
innerHTML
createElement()
appendChild()
template literals
```

---

## CRUD Explanation

CRUD means **Create, Read, Update, and Delete**. These are the four basic operations used to manage data in almost every application.

| CRUD Operation | Meaning | Used In This Project |
| --- | --- | --- |
| Create | Add new data | Add a new task using `push()` |
| Read | Display existing data | Show all tasks using `forEach()` and `renderTasks()` |
| Update | Change existing data | Mark task as complete or undo using `map()` |
| Delete | Remove data | Delete a task using `filter()` |

Example task object:

```js
{
  id: 1,
  text: "Learn JavaScript",
  completed: false
}
```

---

## Step-by-Step Project Explanation

1. The HTML file creates the input field, Add Task button, error message area, and task list area.
2. The CSS file styles the app inside a clean card layout.
3. JavaScript selects the input, button, error message, and task list using `getElementById()`.
4. The `tasks` array stores all task objects.
5. When the user clicks **Add Task**, the `addTask()` function runs.
6. JavaScript gets the input value using `.value.trim()`.
7. If the input is empty, an error message is shown.
8. If the input is valid, a new task object is created with `id`, `text`, and `completed`.
9. The new task is added to the `tasks` array using `push()`.
10. The `renderTasks()` function displays all tasks on the page.
11. `forEach()` loops through the task array and creates task items dynamically.
12. The **Done** button updates the `completed` value using `map()`.
13. The **Delete** button removes a task using `filter()`.
14. `renderTasks()` runs again after every change to show the updated list.

---

## Full-Stack Connection

This project is a strong foundation for full-stack CRUD applications.

| This Project Concept | Full-Stack Usage |
| --- | --- |
| To-do task list | Task manager, admin panel, dashboard module |
| Task object | Data model or database document |
| `tasks` array | Database table or collection |
| Add task | `POST` API request |
| Show tasks | `GET` API request |
| Complete task | `PUT` or `PATCH` API request |
| Delete task | `DELETE` API request |

In a full-stack app, tasks would not only stay in a JavaScript array. They would be sent to a backend REST API and saved in a database such as MongoDB, MySQL, or PostgreSQL.

Example full-stack flow:

```text
Frontend To-Do App -> REST API -> Database CRUD
```

---

## Important Interview Questions and Answers

### 1. What is CRUD?

CRUD means Create, Read, Update, and Delete. These are basic operations used to manage data.

### 2. Why do we use an array in this project?

An array stores multiple task objects in one variable.

### 3. Why do we use objects for tasks?

Objects store related task details such as `id`, `text`, and `completed`.

### 4. What does `push()` do?

`push()` adds a new item to the end of an array.

### 5. What is `forEach()` used for?

`forEach()` loops through the task array to display every task.

### 6. What is `map()` used for?

`map()` creates an updated array. In this project, it updates a task's completed status.

### 7. What is `filter()` used for?

`filter()` creates a new array after removing the selected task.

### 8. What is DOM rendering?

DOM rendering means displaying JavaScript data on the webpage as HTML.

### 9. Why do we use `Date.now()`?

`Date.now()` creates a simple unique ID for each task.

### 10. How does this project connect to REST APIs?

The same add, read, update, and delete actions can be connected to `POST`, `GET`, `PATCH`, and `DELETE` API routes.

---

## Learning Outcome

After completing this project, students will understand how arrays and objects work together in JavaScript. They will be able to add task data, render it on the page, update completion status, and delete tasks using beginner-friendly CRUD logic.

---

## Future Improvements

- Store tasks in local storage
- Add edit task functionality
- Add task priority levels
- Add due dates
- Add task categories
- Add task search and filter
- Show total, completed, and pending task counts
- Connect tasks to a backend API
- Save tasks in a database

---

## Author

**Made by SK SAHIL**  
**Professional Coding Tutor | Freelance AI Developer**
