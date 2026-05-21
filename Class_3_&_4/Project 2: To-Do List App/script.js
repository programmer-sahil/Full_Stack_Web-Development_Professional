/*
  Project 2: To-Do List App

  Main features:
  1. Add a new task
  2. Show all tasks
  3. Mark a task as complete
  4. Delete a task
  5. Show empty message when there are no tasks

  This project introduces basic CRUD logic.

  CRUD means:
  C = Create
  R = Read
  U = Update
  D = Delete
*/


// Selecting the input field where user types a task
const taskInput = document.getElementById("taskInput");

// Selecting the add task button
const addTaskBtn = document.getElementById("addTaskBtn");

// Selecting the error message paragraph
const errorMessage = document.getElementById("errorMessage");

// Selecting the task list container
const taskList = document.getElementById("taskList");


/*
  This array will store all task objects.

  Each task will be stored like this:

  {
    id: 1,
    text: "Learn JavaScript",
    completed: false
  }

  This is important because real full-stack data also comes as array of objects.
*/
let tasks = [];


/*
  Adding click event to the Add Task button.

  When the button is clicked, the addTask function will run.
*/
addTaskBtn.addEventListener("click", addTask);


/*
  Adding keypress event to the input field.

  If the user presses Enter, the task will be added.
*/
taskInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});


/*
  Function to add a new task.
*/
function addTask() {

  /*
    Get the value typed inside the input field.
    trim() removes extra spaces from beginning and end.
  */
  const taskText = taskInput.value.trim();


  /*
    Validation:
    If input is empty, show error and stop the function.
  */
  if (taskText === "") {
    errorMessage.innerText = "Please enter a task.";
    return;
  }


  /*
    Clear error message if input is valid.
  */
  errorMessage.innerText = "";


  /*
    Creating a task object.

    Date.now() gives a unique number based on current time.
    We use it as a simple id.
  */
  const newTask = {
    id: Date.now(),
    text: taskText,
    completed: false
  };


  /*
    Add the new task object into the tasks array.
  */
  tasks.push(newTask);


  /*
    Clear the input field after adding task.
  */
  taskInput.value = "";


  /*
    Render means display updated tasks on the screen.
  */
  renderTasks();
}


/*
  Function to display all tasks on the webpage.

  This function reads the tasks array and creates HTML dynamically.
*/
function renderTasks() {

  /*
    First clear the taskList area.
    This prevents duplicate display.
  */
  taskList.innerHTML = "";


  /*
    If tasks array is empty, show a simple message.
  */
  if (tasks.length === 0) {
    taskList.innerHTML = `
      <p class="empty-message">No tasks added yet.</p>
    `;
    return;
  }


  /*
    Loop through all tasks.

    forEach runs once for every task in the tasks array.
  */
  tasks.forEach(function (task) {

    /*
      Create one div for each task.
    */
    const taskItem = document.createElement("div");

    /*
      Add CSS class to the task div.
    */
    taskItem.className = "task-item";


    /*
      Add dynamic HTML inside taskItem.

      If task.completed is true, we add completed class.
      If false, we keep normal class.
    */
    taskItem.innerHTML = `
      <span class="task-text ${task.completed ? "completed" : ""}">
        ${task.text}
      </span>

      <div class="task-actions">
        <button class="small-btn complete-btn" onclick="toggleComplete(${task.id})">
          ${task.completed ? "Undo" : "Done"}
        </button>

        <button class="small-btn delete-btn" onclick="deleteTask(${task.id})">
          Delete
        </button>
      </div>
    `;


    /*
      Add this task item inside taskList container.
    */
    taskList.appendChild(taskItem);
  });
}


/*
  Function to mark a task as complete or incomplete.

  This is Update operation in CRUD.
*/
function toggleComplete(taskId) {

  /*
    map() creates a new updated array.

    If task id matches the clicked task id,
    then change completed value.

    completed: !task.completed means:
    true becomes false
    false becomes true
  */
  tasks = tasks.map(function (task) {
    if (task.id === taskId) {
      return {
        ...task,
        completed: !task.completed
      };
    }

    return task;
  });


  /*
    Display updated task list.
  */
  renderTasks();
}


/*
  Function to delete a task.

  This is Delete operation in CRUD.
*/
function deleteTask(taskId) {

  /*
    filter() creates a new array.

    It keeps only those tasks whose id does not match taskId.
    So the selected task gets removed.
  */
  tasks = tasks.filter(function (task) {
    return task.id !== taskId;
  });


  /*
    Display updated task list.
  */
  renderTasks();
}


/*
  Call renderTasks once when page loads.

  This will show "No tasks added yet" message at the beginning.
*/
renderTasks();