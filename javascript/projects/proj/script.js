const todoInput = document.getElementById("todo-input");
const addTaskButton = document.getElementById("add-task-btn");
const todoList = document.getElementById("todo-list");  

addTaskButton.addEventListener('click',function(){
    let value = todoInput.value;
    let li = document.createElement('li');
    li.innerText = value;
    let button1 = document.createElement('button');
    button1.innerText = 'X';
    button1.addEventListener('click',function(){
        li.remove();
    })
    li.appendChild(button1);
    todoList.appendChild(li);
    todoInput.value = '';
})


