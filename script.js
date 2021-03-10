const taskList = document.getElementById('lista-tarefas');
const addTaskBtn = document.getElementById('criar-tarefa');
const eraseAllBtn = document.getElementById('apaga-tudo');
const eraseCompletedBtn = document.getElementById('remover-finalizados');

function addTaskToList() {
  const newTask = document.createElement('li');
  const task = document.getElementById('texto-tarefa').value;
  newTask.innerText = task;
  taskList.appendChild(newTask);
  document.getElementById('texto-tarefa').value = '';
}

// Adicionar event listener no botão
addTaskBtn.addEventListener('click', addTaskToList);

function singleClickItem(event) {
  const clickedItem = event.target;
  const currentlySelectedItem = document.querySelector('.selected');
  if (currentlySelectedItem !== null) {
    // Remove a classe selected do item previamente selecionado
    currentlySelectedItem.classList.remove('selected');
  }
  clickedItem.classList.add('selected');
}

function doubleClickItem(event) {
  const doubleClickedItem = event.target;
  if (doubleClickedItem.classList.contains('completed')) {
    doubleClickedItem.classList.remove('completed');
  } else {
    doubleClickedItem.classList.add('completed');
  }
}

taskList.addEventListener('click', singleClickItem);
taskList.addEventListener('dblclick', doubleClickItem);

function eraseFullList() {
  taskList.innerHTML = '';
}
eraseAllBtn.addEventListener('click', eraseFullList);

function eraseCompletedItems() {
  const completedItems = document.querySelectorAll('.completed');
  for (let item = 0; item < completedItems.length; item += 1) {
    completedItems[item].remove();
  }
}
eraseCompletedBtn.addEventListener('click', eraseCompletedItems);
