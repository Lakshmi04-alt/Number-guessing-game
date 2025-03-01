let randomNumber;
let maxNumber;

function startGame() {
    maxNumber = parseInt(document.getElementById("maxNumber").value);
    let messageElement = document.getElementById("message");

    if (isNaN(maxNumber) || maxNumber <= 0) {
        messageElement.textContent = "❌ Please enter a valid max number!";
        messageElement.style.color = "red"; // Make error message visible in red
        messageElement.classList.remove("hidden"); // Ensure message is shown
        return;
    }

    randomNumber = Math.floor(Math.random() * maxNumber) + 1;
    document.getElementById("gameArea").classList.remove("hidden");
    document.getElementById("range").textContent = `1 and ${maxNumber}`;
    messageElement.textContent = "✅ Game started! Make a guess.";
    messageElement.style.color = "black"; // Reset color for normal message
    messageElement.classList.remove("hidden"); // Ensure message is shown
    document.getElementById("resetButton").classList.add("hidden");
}

function checkGuess() {
    let guess = parseInt(document.getElementById("userGuess").value);
    let messageElement = document.getElementById("message");

    if (isNaN(guess)) {
        messageElement.textContent = "⚠️ Please enter a number.";
        messageElement.style.color = "red";
        return;
    }

    if (guess === randomNumber) {
        messageElement.textContent = `🎉 Correct! The number was ${randomNumber}.`;
        messageElement.style.color = "green";
        document.getElementById("resetButton").classList.remove("hidden");
    } else if (guess < randomNumber) {
        messageElement.textContent = "📉 Too low! Try again.";
        messageElement.style.color = "black";
    } else {
        messageElement.textContent = "📈 Too high! Try again.";
        messageElement.style.color = "black";
    }
}

function resetGame() {
    document.getElementById("gameArea").classList.add("hidden");
    document.getElementById("maxNumber").value = "";
    document.getElementById("userGuess").value = "";
    let messageElement = document.getElementById("message");
    messageElement.textContent = "";
    messageElement.classList.add("hidden"); // Hide message on reset
}
