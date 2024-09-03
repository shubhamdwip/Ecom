// adding questions for quiz
const profitQuestions = [
    {
        question: "If the cost price of an item is ₹50 and the selling price is ₹70, what is the profit?",
        options: ["₹10", "₹15", "₹20", "₹25"],
        answer: "₹20"
    },
    {
        question: "If the cost price of an item is ₹80 and the selling price is ₹60, what is the loss?",
        options: ["₹10", "₹20", "₹30", "₹40"],
        answer: "₹20"
    },
    {
        question: "If an item is sold at a profit of 25%, and the cost price is ₹100, what is the selling price?",
        options: ["₹125", "₹100", "₹75", "₹150"],
        answer: "₹125"
    },
    {
        question: "If an item is sold at a loss of 20%, and the selling price is ₹80, what is the cost price?",
        options: ["₹100", "₹90", "₹80", "₹120"],
        answer: "₹100"
    },
    {
        question: "If the cost price of an item is ₹120 and the selling price is ₹150, what is the profit percentage?",
        options: ["20%", "25%", "30%", "15%"],
        answer: "25%"
    },
    {
        question: "If the cost price of an item is ₹200 and the selling price is ₹150, what is the loss percentage?",
        options: ["20%", "25%", "30%", "15%"],
        answer: "25%"
    },
    {
        question: "If an item is sold at a profit of 50%, and the selling price is ₹225, what is the cost price?",
        options: ["₹100", "₹150", "₹200", "₹250"],
        answer: "₹150"
    },
    {
        question: "If an item is sold at a loss of 10%, and the cost price is ₹90, what is the selling price?",
        options: ["₹90", "₹81", "₹100", "₹110"],
        answer: "₹81"
    },
    {
        question: "If an item is sold at a profit of 40%, and the selling price is ₹280, what is the cost price?",
        options: ["₹150", "₹160", "₹170", "₹180"],
        answer: "₹200"
    },
    {
        question: "If the cost price of an item is ₹75 and the selling price is ₹90, what is the profit?",
        options: ["₹10", "₹12.50", "₹15", "₹20"],
        answer: "₹15"
    },
];


let currentQuestionIndex = 0;
let correctAnswers = 0;
let timer;
const userResponses = new Array(profitQuestions.length).fill(null);

const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const previousButton = document.querySelector(".previous");
const nextButton = document.querySelector(".next");
const endButton = document.querySelector(".end");
const timerContainer = document.getElementById("timer-container");
const timerElement = document.getElementById("timer");

function startQuiz() {
    currentQuestionIndex = 0;
    correctAnswers = 0;
    userResponses.fill(null);
    displayQuestion(currentQuestionIndex);
}

function displayQuestion(index) {
    // previous timer
    clearInterval(timer);

    if (index < profitQuestions.length) {
        const question = profitQuestions[index];
        questionText.textContent = question.question;
        optionsContainer.innerHTML = "";

        for (let i = 0; i < question.options.length; i++) {
            const option = question.options[i];
            const optionButton = document.createElement("button");
            optionButton.textContent = option;
            optionButton.className = "option";
            optionButton.addEventListener("click", () => selectOption(option, index)); // Handle option selection
            if (userResponses[index] === option) {
                optionButton.classList.add("selected"); // Highlight selected option
            }
            optionsContainer.appendChild(optionButton);
        }

        previousButton.disabled = index === 0;
        nextButton.disabled = false;

        //  new timer for question
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
    if (selectedOption === profitQuestions[index].answer) {
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
            timerElement.textContent = "10"; // You can set it to the initial time
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

    const totalQuestions = profitQuestions.length;
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
    return userResponses.filter((response, index) => response === profitQuestions[index].answer).length;
}

function calculateWrongAnswers() {
    return userResponses.filter((response, index) => response !== null && response !== profitQuestions[index].answer).length;
}

function calculatePercentage() {
    return (calculateCorrectAnswers() / profitQuestions.length) * 100;
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
