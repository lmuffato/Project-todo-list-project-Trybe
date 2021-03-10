const btnAddTask = document.getElementById('tarefa');
const inputTasks = document.getElementById('texto-tarefa');

function clearInput() {
  inputTasks.value = '';
}

const listOfTasks = document.getElementById('lista-tarefas');

function addsTaskToList() {
  const listItem = document.createElement('li');
  listItem.classList.add('item-lista');
  listOfTasks.appendChild(listItem);
  listItem.innerText = inputTasks.value;
  console.log('teste');
  clearInput();
}

btnAddTask.addEventListener('click', addsTaskToList);
