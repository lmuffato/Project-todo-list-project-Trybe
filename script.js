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
  saveButton.classList.add('disabled');
  event.disabled = true;
  removeButton.disabled = true;
  saveButton.disabled = true;
}

function removeCompleted(e) {
  const completedList = document.querySelectorAll('.completed');
  const event = e.target;

  for (let index = 0; index < completedList.length; index += 1) {
    list.removeChild(completedList[index]);
  }
  if (!list.childNodes.length) {
    deleteButton.classList.add('disabled');
    saveButton.classList.add('disabled');
    deleteButton.disabled = true;
    saveButton.disabled = true;
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

// https://www.horadecodar.com.br/2020/07/21/como-salvar-um-objeto-na-localstorage/
function getList() {
  for (let key = 1; key <= store.length; key += 1) {
    const task = document.createElement('li');
    const storedTask = JSON.parse(store[key]);

    task.className = storedTask.class;
    task.innerText = storedTask.textContent;
    list.appendChild(task);
  }
}

function addTask() {
  const task = document.createElement('li');
  const inputValue = document.querySelector('#texto-tarefa').value;

  task.innerText = inputValue;
  task.addEventListener('click', backgroundSelected);
  task.addEventListener('dblclick', completedTask);

  list.appendChild(task);

  deleteButton.classList.remove('disabled');
  deleteButton.disabled = false;

  saveButton.classList.remove('disabled');
  saveButton.disabled = false;
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
  getList();
};
