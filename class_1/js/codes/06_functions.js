// 06 - Functions
// A function is a reusable block of code.
// We write it once and run it whenever we need it.

function showWelcomeMessage() {
    const messageElement = document.getElementById("message");

    messageElement.textContent = "Welcome to JavaScript functions!";

    console.log("The function has run.");
}

// The button in the HTML uses:
// onclick="showWelcomeMessage()"
// So this function runs when the button is clicked.
