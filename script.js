const list = document.querySelector('#lista-tarefas');
const addButton = document.querySelector('#criar-tarefa');
const deleteButton = document.querySelector('#apaga-tudo');
const saveButton = document.querySelector('#salvar-tarefas');
const removeButton = document.querySelector('#remover-finalizados');
const store = localStorage;

function clearInput() {
  const input = document.querySelector('#texto-tarefa');
  input.value = '';
}

function deleteAll(e) {
  const tasks = document.querySelectorAll('li');
  const event = e.target;

  for (let index = 0; index < tasks.length; index += 1) {
    list.removeChild(tasks[index]);
  }
  event.classList.add('disabled');
  removeButton.classList.add('disabled');
  event.disabled = true;
  removeButton.disabled = true;
}

function removeCompleted(e) {
  const completedList = document.querySelectorAll('.completed');
  const event = e.target;

  for (let index = 0; index < completedList.length; index += 1) {
    list.removeChild(completedList[index]);
  }
  if (!list.childNodes.length) {
    deleteButton.classList.add('disabled');

    deleteButton.disabled = true;
  }
  event.classList.add('disabled');
  event.disabled = true;
}

function completedTask(e) {
  const event = e.target;

  // https://www.javascripttutorial.net/dom/css/check-if-an-element-contains-a-class/
  if (event.classList.contains('completed')) {
    event.classList.remove('completed');

    if (!document.querySelectorAll('.completed').length) {
      removeButton.classList.add('disabled');
      removeButton.disabled = true;
    }
    return;
  }

  removeButton.classList.remove('disabled');
  removeButton.disabled = false;
  return event.classList.add('completed');
}

function backgroundDeselected() {
  const selectedElement = document.querySelector('.selected');
  if (selectedElement !== null) {
    selectedElement.classList.remove('selected');
  }
  return selectedElement;
}

function backgroundSelected(e) {
  const event = e.target;
  const selectedItem = backgroundDeselected();

  if (event === selectedItem) {
    return;
  }
  return event.classList.add('selected');
}

function setList() {
  const tasks = list.childNodes;
  const property = {};

  if (!tasks.length) {
    return alert('Sua lista de tarefas está vázia!');
  }

  for (let index = 0; index < tasks.length; index += 1) {
    const task = tasks[index];

    if (task.classList.contains('selected')) {
      task.classList.remove('selected');
    }
    property.textContent = task.textContent;
    property.class = task.className;
    store.setItem(index + 1, JSON.stringify(property));
  }
}

function getTask(value) {
  const task = document.createElement('li');

  task.innerText = value;
  task.addEventListener('click', backgroundSelected);
  task.addEventListener('dblclick', completedTask);

  return task;
}

// https://www.horadecodar.com.br/2020/07/21/como-salvar-um-objeto-na-localstorage/
function getStoredList() {
  for (let key = 1; key <= store.length; key += 1) {
    const storedTask = JSON.parse(store[key]);
    const task = getTask(storedTask.textContent);

    task.className = storedTask.class;
    list.appendChild(task);
  }
}

function addTask() {
  const inputValue = document.querySelector('#texto-tarefa').value;
  const task = getTask(inputValue);

  list.appendChild(task);

  deleteButton.classList.remove('disabled');
  deleteButton.disabled = false;

  clearInput();
}

function getEvents() {
  addButton.addEventListener('click', addTask);
  deleteButton.addEventListener('click', deleteAll);
  removeButton.addEventListener('click', removeCompleted);
  saveButton.addEventListener('click', setList);
}

window.onload = () => {
  getEvents();
  getStoredList();
};
