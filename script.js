const inputAddTask = document.getElementById('texto-tarefa');
const buttonAddTask = document.getElementById('criar-tarefa');
const tasksList = document.getElementById('lista-tarefas');

function addTask() {
  const newTask = document.createElement('li');
  newTask.textContent = inputAddTask.value;
  tasksList.appendChild(newTask);
  inputAddTask.value = '';
}

buttonAddTask.addEventListener('click', addTask);
