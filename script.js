const $addTaskBtn = document.getElementById('criar-tarefa');
const $taskInput = document.getElementById('texto-tarefa');
const $taskList = document.getElementById('lista-tarefas');

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

function changeColorItemList(event) {
  const $target = event.target;
  const $tasksItens = document.querySelectorAll('.tasks__item');
  $tasksItens.forEach((itemList) => {
    const element = itemList;
    element.style.cssText = 'background-color: rgb(255, 255, 255);';
  });
  $target.style.cssText = 'background-color: rgb(128, 128, 128); ';
}

$taskList.addEventListener('click', changeColorItemList);
