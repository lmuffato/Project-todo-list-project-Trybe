const list = document.querySelector('#lista-tarefas');

function clearInput() {
  const input = document.querySelector('#texto-tarefa');
  input.value = '';
}

function deleteAll(event) {
  const tasks = document.querySelectorAll('li');
  const removeButton = document.querySelector('#remover-finalizados');
  const deleteButton = event.target;

  for (let index = 0; index < tasks.length; index += 1) {
    list.removeChild(tasks[index]);
  }
  deleteButton.classList.add('disabled');
  deleteButton.disabled = true;
  removeButton.classList.add('disabled');
  removeButton.disabled = true;
}

function removeCompleted(event) {
  const completedList = document.querySelectorAll('.completed');
  const removeButton = event.target;

  for (let index = 0; index < completedList.length; index += 1) {
    list.removeChild(completedList[index]);
  }
  removeButton.classList.add('disabled');
}

function completedTask(event) {
  const task = event.target;
  const removeButton = document.querySelector('#remover-finalizados');

  removeButton.classList.remove('disabled');
  removeButton.disabled = false;
  removeButton.addEventListener('click', removeCompleted);

  // https://www.javascripttutorial.net/dom/css/check-if-an-element-contains-a-class/
  if (task.classList.contains('completed')) {
    return task.classList.remove('completed');
  }
  return task.classList.add('completed');
}

function backgroundDeselected() {
  const selectedElement = document.querySelector('.selected');
  if (selectedElement !== null) {
    selectedElement.classList.remove('selected');
  }
  return selectedElement;
}

function backgroundSelected(event) {
  const itemToSelect = event.target;
  const selectedItem = backgroundDeselected();

  if (itemToSelect === selectedItem) {
    return;
  }
  itemToSelect.classList.add('selected');
}

function saveList() {
  const store = window.localStorage;
  const tasks = list.childNodes;

  for (let index = 0; index < tasks.length; index += 1) {
    store.setItem(index + 1, tasks[index].textContent);
  }
}

function addTask() {
  const task = document.createElement('li');
  const inputValue = document.querySelector('#texto-tarefa').value;
  const deleteButton = document.querySelector('#apaga-tudo');
  const saveButton = document.querySelector('#salvar-tarefas');

  task.innerText = inputValue;
  task.addEventListener('click', backgroundSelected);
  task.addEventListener('dblclick', completedTask);
  list.appendChild(task);
  deleteButton.classList.remove('disabled');
  deleteButton.disabled = false;
  deleteButton.addEventListener('click', deleteAll);
  saveButton.classList.remove('disabled');
  saveButton.disabled = false;
  saveButton.addEventListener('click', saveList);
  clearInput();
}

function buttonsEvent() {
  const button = document.querySelector('#criar-tarefa');
  button.addEventListener('click', addTask);
}

function getSavedList() {
  const store = window.localStorage;

  for (let key = 1; key <= store.length; key += 1) {
    const task = document.createElement('li');

    task.innerText = store[key];
    list.appendChild(task);
  }
}

window.onload = () => {
  buttonsEvent();
  getSavedList();
};
