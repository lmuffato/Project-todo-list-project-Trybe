const btnAddTask = document.getElementById('tarefa');
const inputTasks = document.getElementById('texto-tarefa');
const listOfTasks = document.getElementById('lista-tarefas');
const listItems = document.getElementsByClassName('item-lista');

function clearInput() {
  inputTasks.value = '';
}

function createListItem() {
  const listItem = document.createElement('li');
  listItem.classList.add('item-lista');
  return listItem;
}

function changeBgColor(event) {
  event.target.style.setProperty('background-color', 'rgb(128, 128, 128)');
}

function updateListListeners() {
  for (let index = 0; index < listItems.length; index += 1) {
    listItems[index].addEventListener('click', changeBgColor);
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
  updateListListeners();
  clearInput();
}

btnAddTask.addEventListener('click', addsTaskToList);
