function clearList() {
  const taskList = document.querySelectorAll('.task');

  for (let index = taskList.length - 1; index >= 0; index -= 1) {
    taskList[index].parentNode.removeChild(taskList[index]);
  }
}

function clearButtonClick() {
  const clearButton = document.querySelector('#apaga-tudo');

  clearButton.addEventListener('click', clearList);
}

function lineThrough(event) {
  const selectedTask = event.target;
  if (selectedTask.className.includes('completed')) {
    selectedTask.classList.remove('completed');
  } else {
    selectedTask.classList.add('completed');
  }
}

function setComplete() {
  const taskListContainer = document.querySelector('#lista-tarefas');
  taskListContainer.addEventListener('dblclick', lineThrough);
}

function changeTaskBgColor(event) {
  const selectedTask = event.target;
  const clearPreviousTask = document.querySelector('.selected');
  if (clearPreviousTask !== null) {
    clearPreviousTask.classList.remove('selected');
  }
  if (selectedTask.className.includes('task')) {
    selectedTask.classList.add('selected');
  }
}

function selectTask() {
  const taskListContainer = document.querySelector('#lista-tarefas');

  taskListContainer.addEventListener('click', changeTaskBgColor);
}

function getNewTask() {
  const taskText = document.querySelector('#texto-tarefa');
  const text = taskText.value;
  taskText.value = '';
  return text;
}

function addTask() {
  const taskListContainer = document.querySelector('#lista-tarefas');
  const text = getNewTask();

  const newTask = document.createElement('li');
  newTask.innerText = text;
  newTask.className = 'task';
  taskListContainer.appendChild(newTask);
}

function createTask() {
  const createTaskButton = document.querySelector('#criar-tarefa');

  createTaskButton.addEventListener('click', addTask);
}

window.onload = () => {
  createTask();
  selectTask();
  setComplete();
  clearButtonClick();
};
