const $addTaskBtn = document.getElementById('criar-tarefa');
const $taskInput = document.getElementById('texto-tarefa');
const $taskList = document.getElementById('lista-tarefas');

function addTask() {
  const $newTaskItem = document.createElement('li');
  $taskInput.classList.add('tasks__item');
  $newTaskItem.textContent = $taskInput.value;
  $taskList.appendChild($newTaskItem);
  $taskInput.value = '';
}

$addTaskBtn.addEventListener('click', addTask);

function changeColorItemList(event) {
  const $target = event.target;
  $target.style.cssText = 'background-color: rgb(128, 128, 128); ';
}

$taskList.addEventListener('click', changeColorItemList);
