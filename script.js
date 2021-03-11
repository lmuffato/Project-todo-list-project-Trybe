const btnAddTask = document.getElementById('criar-tarefa');
const btnClearTasks = document.getElementById('apaga-tudo');
const btnRemoveCompletedTasks = document.getElementById('remover-finalizados');
const inputTasks = document.getElementById('texto-tarefa');
const listOfTasks = document.getElementById('lista-tarefas');
const listItems = document.getElementsByClassName('item-lista');

function clearInput() {
  inputTasks.value = '';
}

function removesBackgroundColor() {
  for (let index = 0; index < listItems.length; index += 1) {
    listItems[index].style.setProperty(
      'background-color',
      'rgb(255, 255, 255)'
    );
  }
}

function changeBgColor(event) {
  removesBackgroundColor();
  event.target.style.setProperty('background-color', 'rgb(128, 128, 128)');
}

function streakItem(event) {
  event.target.classList.toggle('completed');
}

function createListItem() {
  const listItem = document.createElement('li');
  listItem.classList.add('item-lista');
  return listItem;
}

function updateListItemsListeners() {
  for (let index = 0; index < listItems.length; index += 1) {
    listItems[index].addEventListener('click', changeBgColor);
    listItems[index].addEventListener('dblclick', streakItem);
  }
}

function addInputValuesToListItem(listItem) {
  const item = listItem;
  item.innerText = inputTasks.value;
}

function addsTaskToList() {
  const listItem = createListItem();
  addInputValuesToListItem(listItem);
  listOfTasks.appendChild(listItem);
  updateListItemsListeners();
  clearInput();
}

function clearTasks() {
  listOfTasks.innerHTML = '';
}

function removeCompletedTasks() {
  const completedTasks = document.querySelectorAll('.completed');
  for (let index = 0; index < completedTasks.length; index += 1) {
    listOfTasks.removeChild(completedTasks[index]);
  }
}

btnAddTask.addEventListener('click', addsTaskToList);
btnClearTasks.addEventListener('click', clearTasks);
btnRemoveCompletedTasks.addEventListener('click', removeCompletedTasks);
