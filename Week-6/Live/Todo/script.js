const addBtn = document.getElementById("add-btn");
let todoInput = document.getElementById("todo-input");
const todoItemsComtainer = document.getElementById("todo-items-container");
let todos = [];

addBtn.addEventListener("click", () => {
  const value = todoInput.value.trim();

  if (value !== "") {
    const li = document.createElement("li");
    li.innerText = value;

    const editBtn = document.createElement("button");
    editBtn.classList.add("edit-button");
    editBtn.innerText = "Edit";
    editBtn.addEventListener("click", () => editTodo(li));

    const delBtn = document.createElement("button");
    delBtn.innerText = "X";
    delBtn.classList.add("delete-button");
    delBtn.addEventListener("click", () => removeTodo(li));

    li.append(editBtn);
    li.appendChild(delBtn);

    todos.push(value);
    todoItemsComtainer.appendChild(li);
    todoInput.value = "";
  }
});

let removeAll = document.getElementById("remove-all-todos");
removeAll.addEventListener("click", () => {
  todos = [];
  todoItemsComtainer.innerHTML = "";
});

const removeTodo = (li) => {
  const todoText = li.dataset.text || li.firstChild.textContent;
  const index = todos.indexOf(todoText);

  if (index > -1) {
    todos.splice(index, 1);
    todoItemsComtainer.removeChild(li);
  }
};

const editTodo = (li) => {
  const todoText = li.firstChild.textContent;
  const input = document.createElement("input");
  input.type = "text";
  input.value = todoText;
  input.focus();

  const saveBtn = document.createElement("button");
  saveBtn.innerText = "Save";
  saveBtn.classList.add("save-button");
  saveBtn.addEventListener("click", () => saveTodo(li, input));

  const editBtn = li.querySelector(".edit-button");
  const delBtn = li.querySelector(".delete-button");

  li.replaceChild(input, li.firstChild);
  li.insertBefore(saveBtn, delBtn);
  li.removeChild(editBtn);
};

const saveTodo = (li, input) => {
  const newText = input.value.trim();

  if (newText !== "") {
    const index = todos.indexOf(li.dataset.originalText);

    if (index > -1) {
      todos[index] = newText;
    }

    li.innerHTML = ""; // Clear list item
    li.dataset.originalText = newText; // Store updated text

    const textNode = document.createTextNode(newText);
    li.appendChild(textNode);

    const editBtn = document.createElement("button");
    editBtn.classList.add("edit-button");
    editBtn.innerText = "Edit";
    editBtn.addEventListener("click", () => editTodo(li));

    const delBtn = document.createElement("button");
    delBtn.innerText = "X";
    delBtn.classList.add("delete-button");
    delBtn.addEventListener("click", () => removeTodo(li));

    li.appendChild(editBtn);
    li.appendChild(delBtn);
  }
};
