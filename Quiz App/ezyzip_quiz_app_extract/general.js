// adding question for quiz
const generalQuestions = [
    {
        question: "Which gas do plants absorb from the atmosphere?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
        answer: "Carbon Dioxide"
    },
    {
        question: "What is the largest planet in our solar system?",
        options: ["Mars", "Venus", "Jupiter", "Saturn"],
        answer: "Jupiter"
    },
    {
        question: "Who wrote the play 'Romeo and Juliet'?",
        options: ["William Shakespeare", "Charles Dickens", "Jane Austen", "Leo Tolstoy"],
        answer: "William Shakespeare"
    },
    {
        question: "What is the chemical symbol for the element gold?",
        options: ["Au", "Ag", "Fe", "Hg"],
        answer: "Au"
    },
    {
        question: "Which planet is known as the 'Red Planet'?",
        options: ["Mars", "Venus", "Jupiter", "Saturn"],
        answer: "Mars"
    },
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Rome", "Paris"],
        answer: "Paris"
    },
    {
        question: "Who was the first woman to fly solo across the Atlantic Ocean?",
        options: ["Amelia Earhart", "Rosa Parks", "Marie Curie", "Joan of Arc"],
        answer: "Amelia Earhart"
    },
    {
        question: "What is the largest mammal in the world?",
        options: ["African Elephant", "Blue Whale", "Giraffe", "Polar Bear"],
        answer: "Blue Whale"
    },
    {
        question: "Which gas makes up the majority of Earth's atmosphere?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
        answer: "Nitrogen"
    },
    {
        question: "In which year did the Titanic sink?",
        options: ["1912", "1920", "1931", "1945"],
        answer: "1912"
    },
];

let currentQuestionIndex = 0;
let correctAnswers = 0;
let timer;
const userResponses = new Array(generalQuestions.length).fill(null);

const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const previousButton = document.querySelector(".previous");
const nextButton = document.querySelector(".next");
const endButton = document.querySelector(".end");
const timerContainer = document.getElementById("timer-container");
const timerElement = document.getElementById("timer");

// js for starting quiz
function startQuiz() {
    currentQuestionIndex = 0;
    correctAnswers = 0;
    userResponses.fill(null);
    displayQuestion(currentQuestionIndex);
}

// js for question display
function displayQuestion(index) {
    clearInterval(timer);

    if (index < generalQuestions.length) {
        const question = generalQuestions[index];
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

        //  timer for question
        startTimer();
    } else {
        showResult();
    }
}

function selectOption(selectedOption, index) {
    // user's response for question
    userResponses[index] = selectedOption;

    // Deselect all options
    optionsContainer.querySelectorAll("button.option").forEach(button => {
        button.classList.remove("selected");
    });

    // Highlight the selected option
    event.target.classList.add("selected");

    // selected option is correct and update correctAnswers
    if (selectedOption === generalQuestions[index].answer) {
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

    const totalQuestions = generalQuestions.length;
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
    return userResponses.filter((response, index) => response === generalQuestions[index].answer).length;
}

function calculateWrongAnswers() {
    return userResponses.filter((response, index) => response !== null && response !== generalQuestions[index].answer).length;
}

function calculatePercentage() {
    return (calculateCorrectAnswers() / generalQuestions.length) * 100;
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
