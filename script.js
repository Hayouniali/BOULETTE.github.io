// script.js

// Function to prompt for password and display the love letter if correct password is entered
function showLoveLetter() {
    // Prompt for password
    let password = prompt("Please enter the nickname to unlock the love letter:");

    // Check if the password matches "Boulette"
    if (password.toLowerCase() === "boulette") {
        // Get the love letter element
        let loveLetterElement = document.getElementById('love-letter');
        // Display the love letter
        loveLetterElement.style.display = 'block';
    } else {
        alert("Incorrect nickname. Please try again.");
    }
}

// Event listener to show love letter when clicking the letter case
document.getElementById('letter-case').addEventListener('click', showLoveLetter);
