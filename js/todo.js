const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "toDos";
let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}

function deleteToDo(e) {
    const li = e.target.parentElement;
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    li.remove();
    saveToDos();
}

function paintToDo(newToDo){
    const li = document.createElement("li")
    const span = document.createElement("span")
    const button = document.createElement("button");
    const i = document.createElement("i");

    li.id = newToDo.id
    li.className = "todo-element";
    span.innerText = newToDo.text;
    // i.className="bi bi-x";
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);

    button.appendChild(i);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(e) {
    e.preventDefault();
    
    const newToDoText = toDoInput.value;
    const newToDo = {
        id: Date.now(),
        text: newToDoText
    }
    toDoInput.value = "";
    toDos.push(newToDo)
    paintToDo(newToDo);
    saveToDos();
}



toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos != null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}
