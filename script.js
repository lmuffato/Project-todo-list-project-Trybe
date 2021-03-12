const $addTaskBtn = document.getElementById('criar-tarefa');
const $taskInput = document.getElementById('texto-tarefa');
const $taskList = document.getElementById('lista-tarefas');
const $clearBtn = document.getElementById('apaga-tudo');
const $finishedBtn = document.getElementById('remover-finalizados');

function addTask() {
  if ($taskInput.value !== '') {
    const $newTaskItem = document.createElement('li');
    $newTaskItem.classList.add('tasks__item');
    $newTaskItem.textContent = $taskInput.value;
    $taskList.appendChild($newTaskItem);
    $taskInput.value = '';
  }
}

$addTaskBtn.addEventListener('click', addTask);

function changebackgroundColorItemList(event) {
  const $target = event.target;
  $target.classList.toggle('selected');
}

$taskList.addEventListener('click', changebackgroundColorItemList);

function scratchItemList(event) {
  event.target.classList.toggle('completed');
}

$taskList.addEventListener('dblclick', scratchItemList);

function clearItensList() {
  const $tasksItens = document.querySelectorAll('.tasks__item');
  $tasksItens.forEach((taskItem) => taskItem.parentNode.removeChild(taskItem));
}

$clearBtn.addEventListener('click', clearItensList);

function removeFinishedElement() {
  const $finishedElements = document.querySelectorAll('.completed');
  $finishedElements.forEach((element) => element.parentNode.removeChild(element));
}

$finishedBtn.addEventListener('click', removeFinishedElement);
