const todoInput = document.getElementById("todo-input");
const addTaskButton = document.getElementById("add-task-btn");
const todoList = document.getElementById("todo-list");  

let list = [];


addTaskButton.addEventListener("click", () => {
    const todoText = todoInput.value.trim();
    if (todoText !== "") {
        const newTodo = {
            id: Date.now(),
            text: todoText,
            completed: false
        };
        list.push(newTodo);
        localStorage.setItem("todoList", JSON.stringify(list));
        todoInput.value = "";
        renderList(); // Update the UI here
    }
});

// Function to render the todo list
function renderList() {
    todoList.innerHTML = "";
    list.forEach(todo => {
        const li = document.createElement("li");
        li.textContent = todo.text;
        todoList.appendChild(li);
    });
}

// Optionally, load existing todos from localStorage on page load
window.addEventListener("DOMContentLoaded", () => {
    const storedList = localStorage.getItem("todoList");
    if (storedList) {
        list = JSON.parse(storedList);
        renderList();
    }
});