const toDoList = [];

function renderNewTask(task) {
  const list = document.getElementById('lista-tarefas');
  list.appendChild(task);
}

function clearInput(input) {
  input.value = '';
}

function addNewTask() {
  const task = document.getElementById('texto-tarefa');
  const listItem = document.createElement('li');

  listItem.innerText = task.value;
  toDoList.push(task.value);
  renderNewTask(listItem);
  clearInput(task);
}

document.getElementById('criar-tarefa').addEventListener('click', addNewTask);
