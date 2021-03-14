const $addTaskBtn = document.getElementById('criar-tarefa');
const $taskInput = document.getElementById('texto-tarefa');
const $taskList = document.getElementById('lista-tarefas');
const $clearBtn = document.getElementById('apaga-tudo');
const $finishedBtn = document.getElementById('remover-finalizados');
const $saveTasks = document.getElementById('salvar-tarefas');

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
  console.log($target);
  const $itemListSelected = document.querySelectorAll('.selected');
  $itemListSelected.forEach((element) => {
    if (element !== $target) {
      element.classList.remove('selected');
    }
  });
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

const $status = {
  added: [],
  marked: [],
  completed: [],
};

function saveStatusItens() {
  const $itensList = document.querySelectorAll('.tasks__item');
  const $itemSelected = document.querySelector('.selected');
  const $itensCompleted = document.querySelectorAll('.completed');
  $itensList.forEach((item) => $status.added.push(item));
  $status.marked.push($itemSelected);
  $itensCompleted.forEach((itemCompleted) => $status.completed.push(itemCompleted));
}

$saveTasks.addEventListener('click', saveStatusItens);
