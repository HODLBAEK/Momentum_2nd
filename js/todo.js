const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = document.querySelector("#todo-form input");

const TODOS_KEY = "todos";

let toDos = [];

//* saving input.value toDos in local storage
function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); // value -> string('')
}

//* deleting Items from Todo list by clicking❌
function deleteToDo(e) {
  const li = e.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

//* making todo list and ❌button on the screen.
function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id; //newTodo는 newTodoObj을 인자로 받아서 id가 있음.
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  li.appendChild(span); //appendChild(button)을 먼저하면 버튼이 앞쪽으로 간다.
  li.appendChild(button);
  toDoList.appendChild(li);
  button.addEventListener("click", deleteToDo);
}

//* prevent F5 and deleting input.value in the form
function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(), // 랜덤한 숫자를 id에 assign하는 용도
  };
  toDos.push(newTodoObj); //toDos에는 이제 newTodoObj가 object로 저장됨.
  paintToDo(newTodoObj); //submit하는 순간 newTodoObj을 인자로 받는 paintTodo실행.
  saveToDos(); //submit하는 순간 localStorage에도 저장.
}

toDoForm.addEventListener("submit", handleToDoSubmit);

//* localstorage에 있는 TODOS_KEY를 savedToDos에 할당. savedToDos가 비어있지 않다면, 그 array화(parse)시켜서 parsedToDos에 저장.
//* 그리고 parsedToDos.forEach를 이용해서 각각 값에 대해서 paintToDo하기
const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
