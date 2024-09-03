// adding questions for quiz
const scienceQuestions = [
    {
        question: "What is the chemical symbol for water?",
        options: ["H2O", "CO2", "O2", "CH4"],
        answer: "H2O"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Venus", "Mars", "Jupiter", "Saturn"],
        answer: "Mars"
    },
    {
        question: "What is the center of an atom called?",
        options: ["Nucleus", "Proton", "Electron", "Neutron"],
        answer: "Nucleus"
    },
    {
        question: "What is the process by which plants make their own food?",
        options: ["Photosynthesis", "Respiration", "Fermentation", "Digestion"],
        answer: "Photosynthesis"
    },
    {
        question: "Which gas is most abundant in Earth's atmosphere?",
        options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Argon"],
        answer: "Nitrogen"
    },
    {
        question: "What is the chemical symbol for gold?",
        options: ["Ag", "Au", "Fe", "Hg"],
        answer: "Au"
    },
    {
        question: "What is the largest planet in our solar system?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        answer: "Jupiter"
    },
    {
        question: "What is the smallest particle of an element that retains its properties?",
        options: ["Molecule", "Atom", "Proton", "Neutron"],
        answer: "Atom"
    },
    {
        question: "Which gas do plants absorb from the atmosphere?",
        options: ["Carbon dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
        answer: "Carbon dioxide"
    },
    {
        question: "What is the process of conversion of a solid directly into a gas called?",
        options: ["Melting", "Freezing", "Sublimation", "Condensation"],
        answer: "Sublimation"
    },
];

let currentQuestionIndex = 0;
let correctAnswers = 0;
let timer;
const userResponses = new Array(scienceQuestions.length).fill(null);

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
    // previous timer clear
    clearInterval(timer);

    if (index < scienceQuestions.length) {
        const question = scienceQuestions[index];
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

        // Starting new timer for the question
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

    // Highlighting the selected option
    event.target.classList.add("selected");

    // selected option is correct and update correctAnswers
    if (selectedOption === scienceQuestions[index].answer) {
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

// js for show result
function showResult() {
    clearInterval(timer);
    questionText.style.display = "none";
    optionsContainer.style.display = "none";
    timerContainer.style.display = "none";

    const resultPage = document.querySelector(".result-page");
    resultPage.style.display = "block";

    const totalQuestions = scienceQuestions.length;
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
    return userResponses.filter((response, index) => response === scienceQuestions[index].answer).length;
}

function calculateWrongAnswers() {
    return userResponses.filter((response, index) => response !== null && response !== scienceQuestions[index].answer).length;
}

function calculatePercentage() {
    return (calculateCorrectAnswers() / scienceQuestions.length) * 100;
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
    // Redirect to the home page or perform your desired action
    window.location.href = "index1.html"; // Change the URL as needed
});

document.getElementById("start-again").addEventListener("click", () => {
    // Reseting quiz
    currentQuestionIndex = 0;
    correctAnswers = 0;
    userResponses.fill(null);

    // existing timer
    clearInterval(timer);

    // Hiding the result page
    const resultPage = document.querySelector(".result-page");
    resultPage.style.display = "none";

    // displayQuestion function to display the first question
    displayQuestion(currentQuestionIndex);
    location.reload();
});
