// adding question for quiz
const mathQuestions = [
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        answer: "4"
    },
    {
        question: "What is 5 * 7?",
        options: ["35", "40", "45", "50"],
        answer: "35"
    },
    {
        question: "What is 8 divided by 2?",
        options: ["2", "3", "4", "5"],
        answer: "4"
    },
    {
        question: "What is 12 - 7?",
        options: ["3", "4", "5", "6"],
        answer: "5"
    },
    {
        question: "What is 6 multiplied by 9?",
        options: ["45", "54", "63", "72"],
        answer: "54"
    },
    {
        question: "What is 18 + 27?",
        options: ["35", "45", "55", "65"],
        answer: "45"
    },
    {
        question: "What is 64 divided by 8?",
        options: ["6", "7", "8", "9"],
        answer: "8"
    },
    {
        question: "What is 15 - 9?",
        options: ["3", "4", "5", "6"],
        answer: "6"
    },
    {
        question: "What is 3 * 11?",
        options: ["22", "33", "44", "55"],
        answer: "33"
    },
    {
        question: "What is 7 + 8?",
        options: ["13", "14", "15", "16"],
        answer: "15"
    },
];

let currentQuestionIndex = 0;
let correctAnswers = 0;
let timer;
const userResponses = new Array(mathQuestions.length).fill(null);

const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const previousButton = document.querySelector(".previous");
const nextButton = document.querySelector(".next");
const endButton = document.querySelector(".end");
const timerContainer = document.getElementById("timer-container");
const timerElement = document.getElementById("timer");

// js for start quiz
function startQuiz() {
    currentQuestionIndex = 0;
    correctAnswers = 0;
    userResponses.fill(null);
    displayQuestion(currentQuestionIndex);
}

// js for display question
function displayQuestion(index) {
    // previous timer
    clearInterval(timer);

    if (index < mathQuestions.length) {
        const question = mathQuestions[index];
        questionText.textContent = question.question;
        optionsContainer.innerHTML = "";

        for (let i = 0; i < question.options.length; i++) {
            const option = question.options[i];
            const optionButton = document.createElement("button");
            optionButton.textContent = option;
            optionButton.className = "option";
            optionButton.addEventListener("click", () => selectOption(option, index));
            if (userResponses[index] === option) {
                optionButton.classList.add("selected");
            }
            optionsContainer.appendChild(optionButton);
        }

        previousButton.disabled = index === 0;
        nextButton.disabled = false;

        // Start a new timer for the current question
        startTimer();
    } else {
        showResult();
    }
}

function selectOption(selectedOption, index) {
    // Record the user's response for the current question
    userResponses[index] = selectedOption;

    // Deselect all options
    optionsContainer.querySelectorAll("button.option").forEach(button => {
        button.classList.remove("selected");
    });

    // Highlight the selected option
    event.target.classList.add("selected");

    // Check if the selected option is correct and update correctAnswers
    if (selectedOption === mathQuestions[index].answer) {
        correctAnswers++;
    }
}


function startTimer() {
    let timeLeft = 10;
    timerElement.textContent = timeLeft;
    timer = setInterval(() => {
        timeLeft--;
        timerElement.textContent = timeLeft;
        if (timeLeft === 0) {
            clearInterval(timer);
            // Reset the timer display
            timerElement.textContent = "10";
            currentQuestionIndex++;
            displayQuestion(currentQuestionIndex);
        }
    }, 1000);
}


function showResult() {
    clearInterval(timer);
    questionText.style.display = "none";
    optionsContainer.style.display = "none";
    timerContainer.style.display = "none";

    const resultPage = document.querySelector(".result-page");
    resultPage.style.display = "block";

    const totalQuestions = mathQuestions.length;
    const attemptedQuestions = currentQuestionIndex;
    const correct = correctAnswers;
    const wrong = attemptedQuestions - correct;
    const percentage = ((correct / totalQuestions) * 100).toFixed(2);

    document.getElementById("total-questions").textContent = totalQuestions;
    document.getElementById("attempted-questions").textContent = attemptedQuestions;
    document.getElementById("correct-answers").textContent = correct;
    document.getElementById("wrong-answers").textContent = wrong;
    document.getElementById("percentage").textContent = percentage + "%";

    // Disable previous and next buttons
    previousButton.disabled = true;
    nextButton.disabled = true;
}

function calculateCorrectAnswers() {
    return userResponses.filter((response, index) => response === mathQuestions[index].answer).length;
}

function calculateWrongAnswers() {
    return userResponses.filter((response, index) => response !== null && response !== mathQuestions[index].answer).length;
}

function calculatePercentage() {
    return (calculateCorrectAnswers() / mathQuestions.length) * 100;
}

startQuiz();

previousButton.addEventListener("click", () => {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion(currentQuestionIndex);
    }
});

nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    displayQuestion(currentQuestionIndex);
});

endButton.addEventListener("click", showResult);

// Event listener for the "Go to Home" button
document.getElementById("go-to-home").addEventListener("click", () => {
    window.location.href = "index1.html"; 
});

document.getElementById("start-again").addEventListener("click", () => {
    // Reset the quiz
    currentQuestionIndex = 0;
    correctAnswers = 0;
    userResponses.fill(null);

    // Clear any existing timer
    clearInterval(timer);

    // Hide the result page
    const resultPage = document.querySelector(".result-page");
    resultPage.style.display = "none";

    // Call the displayQuestion function to display the first question
    displayQuestion(currentQuestionIndex);
    location.reload();
});
