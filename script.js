const taskList = document.getElementById('lista-tarefas');
const addTaskBtn = document.getElementById('criar-tarefa');

function addTaskToList() {
  const newTask = document.createElement('li');
  const task = document.getElementById('texto-tarefa').value;
  newTask.innerText = task;
  taskList.appendChild(newTask);
  document.getElementById('texto-tarefa').value = '';
}

// Adicionar event listener no botão
addTaskBtn.addEventListener('click', addTaskToList);
