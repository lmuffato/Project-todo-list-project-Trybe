function getCount() {
  const numberCount = parseInt(localStorage.getItem('count'), 10);
  if (!Number.isNaN(numberCount)) {
    return numberCount;
  }
  return 1;
}

function getInputNameTask() {
  return document.getElementById('texto-tarefa');
}

function getListTask() {
  return document.getElementById('lista-tarefas');
}

function getTaskName() {
  const taskName = getInputNameTask().value;
  if (taskName !== '' && taskName !== undefined) {
    return taskName;
  }
  return false;
}

function clearInputTask() {
  getInputNameTask().value = '';
}

function saveTask(task) {
  const count = getCount() + 1;
  localStorage.setItem(`task_${count}`, task.innerText);
  localStorage.setItem('count', count.toString());
}

function createTask(name) {
  const task = document.createElement('li');
  task.innerText = name;
  return task;
}

function addTask() {
  const listTask = getListTask();
  const taskName = getTaskName();
  if (taskName === false) {
    return false;
  }
  const task = createTask(taskName);
  listTask.appendChild(task);
  saveTask(task);
  clearInputTask();
}

function addEventButtonAddTarefa() {
  const buttonAddTarefa = document.getElementById('criar-tarefa');
  buttonAddTarefa.addEventListener('click', addTask);
}

window.onload = function init() {
  addEventButtonAddTarefa();
};
