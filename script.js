const btnAddTask = document.getElementById('criar-tarefa');
const btnMoveUp = document.getElementById('mover-cima');
const btnMoveDown = document.getElementById('mover-baixo');
const btnClearTasks = document.getElementById('apaga-tudo');
const btnRemoveCompletedTasks = document.getElementById('remover-finalizados');
const btnSaveTasks = document.getElementById('salvar-tarefas');
const inputTasks = document.getElementById('texto-tarefa');
const listOfTasks = document.getElementById('lista-tarefas');
const listItems = document.getElementsByClassName('item-lista');

function clearInput() {
  inputTasks.value = '';
}

// Without adding the selected class
// function removesBackgroundColor() {
//   for (let index = 0; index < listItems.length; index += 1) {
//     listItems[index].style.setProperty('background-color', 'transparent');
//   }
// }
// function changeBgColor(event) {
//   removesBackgroundColor();
//   event.target.style.setProperty('background-color', 'rgb(128, 128, 128)');
// }

function removesBackgroundColor() {
  for (let index = 0; index < listItems.length; index += 1) {
    listItems[index].classList.remove('selected');
    listItems[index].style.setProperty('background-color', 'transparent');
  }
}

function changeBgColor(event) {
  removesBackgroundColor();
  event.target.classList.add('selected');
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
function verifyButtons() {
  const selected = document.querySelector('.selected');

  if (listItems.length <= 1 || selected === null) {
    btnMoveUp.disabled = true;
    btnMoveDown.disabled = true;
  } else {
    btnMoveUp.disabled = false;
    btnMoveDown.disabled = false;
  }
}

function updateListItemsListeners() {
  for (let index = 0; index < listItems.length; index += 1) {
    listItems[index].addEventListener('click', changeBgColor);
    listItems[index].addEventListener('dblclick', streakItem);
    listItems[index].addEventListener('click', verifyButtons);
  }
  if (listItems.length > 1) {
    btnMoveDown.disabled = false;
    btnMoveUp.disabled = false;
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

function saveTasks() {
  localStorage.setItem(1, listOfTasks.innerHTML);
}

function getSavedTasks() {
  listOfTasks.innerHTML = localStorage.getItem(1);
  updateListItemsListeners();
}

// I created this function to drop the items before I knew that the insertBefore method existed.
// for (let index = 0; index < listItems.length; index += 1) {
//   if (selected[0] === listItems[index] && index !== 0) {
//     listItems[index].parentNode.insertBefore(
//       listItems[index],
//       listItems[index - 1]
//     );
//   }
// }
// Reference: https://developer.mozilla.org/pt-BR/docs/Web/API/Node/insertBefore

function moveUp() {
  const selected = document.querySelector('.selected');
  if (selected.previousSibling != null) {
    listOfTasks.insertBefore(selected, selected.previousSibling);
  }
}

function moveDown() {
  const selected = document.querySelector('.selected');
  if (selected.nextSibling !== null) {
    listOfTasks.insertBefore(selected.nextSibling, selected);
  }
}

window.onload = function init() {
  getSavedTasks();
  verifyButtons();
};

btnAddTask.addEventListener('click', addsTaskToList);
btnAddTask.addEventListener('click', verifyButtons);
btnClearTasks.addEventListener('click', clearTasks);
btnRemoveCompletedTasks.addEventListener('click', removeCompletedTasks);
btnSaveTasks.addEventListener('click', saveTasks);
btnMoveUp.addEventListener('click', moveUp);
btnMoveDown.addEventListener('click', moveDown);
