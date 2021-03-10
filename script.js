function changeTaskBgColor(event) {
  const selectedTask = event.target;
  selectedTask.style.backgroundColor = 'rgb(128, 128, 128)';
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
};
