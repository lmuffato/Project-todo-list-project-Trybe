const listStored = localStorage.getItem('list');

const textBox = document.getElementById('texto-tarefa');

const createTaskBtn = document.getElementById('criar-tarefa');

createTaskBtn.innerText = 'AdicionarTarefa';

const toDoList = document.getElementById('lista-tarefas');

const listItens = document.getElementsByTagName('li');

const clearTasksDone = document.getElementById('remover-finalizados');

clearTasksDone.innerText = 'Clear Tasks Done';

const saveTasksBtn = document.getElementById('salvar-tarefas');

const moveDownBtn = document.getElementById('mover-baixo');

const moveUpBtn = document.getElementById('mover-cima');

function deleteSelectClass() {
  for (let index = 0; index < listItens.length; index += 1) {
    listItens[index].classList.remove('selected');
  }
}

function addSelectClass(e) {
  deleteSelectClass();
  e.target.className += ' selected';
}

function deleteCompletedClass() {
  for (let index = 0; index < listItens.length; index += 1) {
    listItens[index].classList.remove('completed');
  }
}

function addCompletedClass(e) {
  let sum = 0;
  for (let index = 0; index < e.target.classList.length; index += 1) {
    if (e.target.classList[index] !== 'completed') {
      sum += 1;
    }
  }
  if (sum === e.target.classList.length) {
    e.target.classList += ' completed';
  } else {
    deleteCompletedClass();
  }
}

function clearListTask() {
  for (let index = 0; index < listItens.length; index) {
    toDoList.removeChild(toDoList.firstElementChild);
  }
  localStorage.clear();
}

function addTaskToList() {
  const task = textBox.value;
  const taskElement = document.createElement('li');
  taskElement.innerText = task;
  taskElement.addEventListener('click', addSelectClass);
  taskElement.addEventListener('dblclick', addCompletedClass);
  toDoList.appendChild(taskElement);
  textBox.value = '';
}

createTaskBtn.addEventListener('click', addTaskToList);

const clearList = document.getElementById('apaga-tudo');
clearList.innerText = 'clear all tasks';
clearList.addEventListener('click', clearListTask);

function clearingTasksDone() {
  const tasks = document.getElementsByTagName('li');
  for (let index = (tasks.length - 1); index >= 0; index -= 1) {
    if (tasks[index].hasAttribute('class', 'completed')) {
      toDoList.removeChild(tasks[index]);
    }
  }
}

clearTasksDone.addEventListener('click', clearingTasksDone);

function saveAllTasks() {
  const tasks = document.getElementsByTagName('li');
  let savedTasks = [];
  for (let index = 0; index < tasks.length; index += 1) {
    const objTasks = {
      innerText: tasks[index].innerText,
      classList: tasks[index].classList,
      id: tasks[index].id,
    };
    savedTasks.push(objTasks);
  }
  localStorage.setItem('list', savedTasks);
}

saveTasksBtn.addEventListener('click', saveAllTasks);

if (listStored !== null && listStored.length !== 0) {
  for (let index = 0; index < listStored.length; index += 1) {
    const task = document.createElement('li');
    task.innerHTML = listStored[index].innerText;
    task.classList = listStored[index].classList;
    task.id = listStored[index].id;
    toDoList.appendChild(task);
  }
}
/* Consultei o repositorio de Rogerio Lambert para resolver essa questao:
https://github.com/tryber/sd-010-a-project-todo-list/pull/75/files 
Nao sabia da existencia do .insertBefore */
function moveFindSelectedDown() {
  const tasks = document.getElementsByTagName('li');
  for (let index = (tasks.length - 2); index >= 0; index -= 1) {
    if
    (tasks[index].hasAttribute('class', 'selected') && tasks[index].nextElementSibling !== null) {
      toDoList.insertBefore(tasks[index + 1], tasks[index]);
    }
  }
}

moveDownBtn.addEventListener('click', moveFindSelectedDown);
