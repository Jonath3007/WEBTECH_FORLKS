let timerDisplay = document.getElementById("timerDisplay");
let startButton = document.getElementById("startButton");
let stopButton = document.getElementById("stopButton");
let resetButton = document.getElementById("resetButton");

let timerInterval;
let centiseconds= 0;

function updateDisplay() {
    let seconds = Math.floor(centiseconds / 100);
    let centis = centiseconds % 100;

    let secondsDisplay = String(seconds).padStart(3, "0");
    let centiDisplay = String(centis).padStart(2, "0");

    timerDisplay.textContent = `${secondsDisplay}:${centiDisplay}`;

    // Stop at 999:59
    if (seconds >= 999 && centis >= 59) {
        clearInterval(timerInterval);
    }
}

function startTimer() {
    if(!timerInterval) {
        timerInterval = setInterval(() => {
            centiseconds++;
            updateDisplay();
        }, 10);
    }
}

function stopTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
}

function resetTimer() {
    stopTimer();
    centiseconds = 0;
    updateDisplay();
}

startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
resetButton.addEventListener("click", resetTimer);