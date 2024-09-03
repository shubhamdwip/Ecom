document.addEventListener("DOMContentLoaded", function() {
    // Selecting elements
    const timerDisplay = document.getElementById("timer");
    const startButton = document.getElementById("start");
    const stopButton = document.getElementById("stop");
    const resetButton = document.getElementById("reset");

    let timerInterval;
    let startTime;
    let elapsedTime = 0;

    // Function to display time in HH:MM:SS format with milliseconds
    function displayTime() {
        const hours = Math.floor(elapsedTime / 3600);
        const minutes = Math.floor((elapsedTime % 3600) / 60);
        const seconds = Math.floor(elapsedTime % 60);
        const milliseconds = Math.floor((elapsedTime % 1) * 100);

        timerDisplay.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${milliseconds.toString().padStart(2, '0')}`;
    }

    // Function to start the timer
    function startTimer() {
        startTime = Date.now() - elapsedTime;
        timerInterval = setInterval(function() {
            elapsedTime = (Date.now() - startTime) / 1000;
            displayTime();
        }, 10);
    }

    // Function to stop the timer
    function stopTimer() {
        clearInterval(timerInterval);
    }

    // Function to reset the timer
    function resetTimer() {
        clearInterval(timerInterval);
        elapsedTime = 0;
        displayTime();
    }

    // Event listeners for buttons
    startButton.addEventListener("click", startTimer);
    stopButton.addEventListener("click", stopTimer);
    resetButton.addEventListener("click", resetTimer);
});
