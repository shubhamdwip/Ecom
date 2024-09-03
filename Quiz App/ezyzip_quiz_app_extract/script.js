// Select elements in the DOM
const enterButton = document.getElementById("enter");
const nameInput = document.querySelector(".name");
const categoriesDiv = document.querySelector(".categories");

// Event listener for the "Enter" button
enterButton.addEventListener("click", () => {
    // user's name
    const userName = nameInput.value;

    // user name
    if (userName.trim() !== "") {
        nameInput.style.display = "none";
        enterButton.style.display = "none";
        categoriesDiv.style.display = "block";

        // Display  greeting with the user's name
        const greeting = document.createElement("h2");
        greeting.textContent = `Hello ${userName}!`;
        categoriesDiv.insertBefore(greeting, categoriesDiv.firstChild);
    }
});
