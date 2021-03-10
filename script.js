function getNewTask() {
  const taskText = document.querySelector('#texto-tarefa');
  const text = taskText.value;
  taskText.value = '';
  return text;
}

function addTask() {
  const taskListContainer = document.querySelector('#lista-tarefas');
  const text = getNewTask();

  let newTask = document.createElement('li');
  newTask.innerText = text;
  taskListContainer.appendChild(newTask);
}

function createTask() {
  const createTaskButton = document.querySelector('#criar-tarefa');

  createTaskButton.addEventListener('click', addTask)
}

window.onload = () => {
  createTask();
};