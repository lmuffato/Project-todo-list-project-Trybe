function getCount() {
  const numberCount = parseInt(localStorage.getItem('count'), 10);
  if (!Number.isNaN(numberCount)) {
    return numberCount;
  }
  return 0;
}

function getInputNameTask() {
  return document.getElementById('texto-tarefa');
}

function getListTask() {
  return document.getElementById('lista-tarefas');
}

function getTasks() {
  const listTask = [];
  for (let i = 1; i <= getCount(); i += 1) {
    listTask.push(localStorage.getItem(`task_${i}`));
  }
  return listTask;
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

function removeAllSelectItemLi() {
  const listTask = getListTask();
  for (let i = 0; i < listTask.childElementCount; i += 1) {
    const itemLi = listTask.getElementsByTagName('li')[i];
    itemLi.classList.remove('selected');
  }
}

function fillListItem(event) {
  const itemLi = event.currentTarget;
  removeAllSelectItemLi();
  itemLi.className = 'selected';
}

function addEventListItem() {
  const listTask = getListTask();
  for (let i = 0; i < listTask.childElementCount; i += 1) {
    listTask.getElementsByTagName('li')[i].addEventListener('click', fillListItem);
  }
}

function loadTasks() {
  const listTask = getTasks();
  for (let i = 0; i < listTask.length; i += 1) {
    const taskLi = createTask(listTask[i]);
    getListTask().appendChild(taskLi);
  }
}

window.onload = function init() {
  loadTasks();
  addEventButtonAddTarefa();
  addEventListItem();
};
