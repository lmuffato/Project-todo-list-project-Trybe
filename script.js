const $addTaskBtn = document.getElementById('criar-tarefa');
const $taskInput = document.getElementById('texto-tarefa');
const $taskList = document.getElementById('lista-tarefas');

function addTask() {
  const $taskItem = document.createElement('li');
  $taskItem.textContent = $taskInput.value;
  $taskList.appendChild($taskItem);
  $taskInput.value = '';
}

$addTaskBtn.addEventListener('click', addTask);
