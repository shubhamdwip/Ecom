document.addEventListener("DOMContentLoaded", function() {
    var taskInput = document.getElementById("taskinput");
    var addTaskButton = document.getElementById("addtask");
    var taskList = document.getElementById("task-list");

    function createTask(taskText) {
        var listItem = document.createElement("li");

        // Create a container for task text and buttons
        var taskContainer = document.createElement("div");
        taskContainer.className = "task-container";

        // Create task text
        var taskTextNode = document.createTextNode(taskText);
        taskContainer.appendChild(taskTextNode);

        // Create complete button
        var completeButton = document.createElement("button");
        completeButton.textContent = "✔";
        completeButton.onclick = function() {
            listItem.classList.toggle("completed");
        };
        taskContainer.appendChild(completeButton);

        // Create edit button
        var editButton = document.createElement("button");
        editButton.textContent = "✎";
        editButton.onclick = function() {
            var newTaskText = prompt("Edit task:", taskText);
            if (newTaskText !== null) {
                taskTextNode.textContent = newTaskText;
            }
        };
        taskContainer.appendChild(editButton);

        // Create delete button
        var deleteButton = document.createElement("button");
        deleteButton.textContent = "❌";
        deleteButton.onclick = function() {
            taskList.removeChild(listItem);
        };
        taskContainer.appendChild(deleteButton);

        // Create checkbox
        var checkbox = document.createElement("span");
        checkbox.className = "checkbox";
        checkbox.onclick = function() {
            listItem.classList.toggle("completed");
        };
        taskContainer.appendChild(checkbox);

        listItem.appendChild(taskContainer);
        taskList.appendChild(listItem);
    }

    addTaskButton.addEventListener("click", function() {
        var taskText = taskInput.value.trim();
        if (taskText !== '') {
            createTask(taskText);
            taskInput.value = '';
        }
    });

    taskInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            var taskText = taskInput.value.trim();
            if (taskText !== '') {
                createTask(taskText);
                taskInput.value = '';
            }
        }
    });
});

