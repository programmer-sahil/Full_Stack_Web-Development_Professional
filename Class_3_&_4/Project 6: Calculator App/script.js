/*
  Project 6: Calculator App

  Main features:
  1. Display clicked numbers/operators
  2. Clear display
  3. Delete last character
  4. Calculate result
  5. Handle invalid calculation

  This project helps students practice:
  - DOM
  - Functions
  - Events
  - Operators
  - Conditions
*/


/*
  Select the display input from HTML.
*/
const display = document.getElementById("display");


/*
  Function to add value to the display.

  Example:
  If user clicks 7, display becomes "7".
  If user clicks +, display becomes "7+".
*/
function appendValue(value) {

  /*
    If display currently shows Error,
    clear it before adding a new value.
  */
  if (display.value === "Error") {
    display.value = "";
  }

  /*
    Add clicked value to existing display value.
  */
  display.value = display.value + value;
}


/*
  Function to clear the full display.

  This runs when user clicks C.
*/
function clearDisplay() {
  display.value = "";
}


/*
  Function to delete the last character.

  Example:
  123+ becomes 123
*/
function deleteLast() {

  /*
    slice(0, -1) removes the last character from a string.
  */
  display.value = display.value.slice(0, -1);
}


/*
  Function to calculate final result.

  This runs when user clicks =.
*/
function calculateResult() {

  /*
    If display is empty, do nothing.
  */
  if (display.value === "") {
    return;
  }

  /*
    try/catch is used to handle invalid calculations.

    Example invalid input:
    10++5
    5/*
    9..2
  */
  try {

    /*
      eval() evaluates the arithmetic expression.

      Example:
      eval("10+5") returns 15.
    */
    const result = eval(display.value);

    /*
      Show result in display.
    */
    display.value = result;

  } catch (error) {

    /*
      If calculation is invalid, show Error.
    */
    display.value = "Error";
  }
}