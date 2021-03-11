// Criar uma função para poder adicionar novas tarefas a lista e limpar o input
function clearInput() {
  const input = document.querySelector('#texto-tarefa');
  input.value = '';
}

function deleteAll(event) {
  const list = document.querySelector('#lista-tarefas');
  const tasks = document.querySelectorAll('li');
  const removeButton = document.querySelector('#remover-finalizados');
  const deleteButton = event.target;

  for (let index = 0; index < tasks.length; index += 1) {
    list.removeChild(tasks[index]);
  }
  deleteButton.style.visibility = 'hidden';
  removeButton.style.visibility = 'hidden';
}

function completedRemove(event) {
  const list = document.querySelector('#lista-tarefas');
  const completedList = document.querySelectorAll('.completed');
  const removeButton = event.target;

  for (let index = 0; index < completedList.length; index += 1) {
    list.removeChild(completedList[index]);
  }
  removeButton.style.visibility = 'hidden';
}

function completedTask(event) {
  const task = event.target;
  const removeButton = document.querySelector('#remover-finalizados');

  removeButton.style.visibility = 'visible';
  removeButton.addEventListener('click', completedRemove);

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
}

function backgroundSelected(event) {
  backgroundDeselected();
  event.target.classList.add('selected');
}

function addTask() {
  const list = document.querySelector('#lista-tarefas');
  const task = document.createElement('li');
  const inputValue = document.querySelector('#texto-tarefa').value;
  const deleteButton = document.querySelector('#apaga-tudo');

  task.innerText = inputValue;
  task.addEventListener('click', backgroundSelected);
  task.addEventListener('dblclick', completedTask);
  list.appendChild(task);
  deleteButton.style.visibility = 'visible';
  deleteButton.addEventListener('click', deleteAll);
  clearInput();
}

function buttonEvent() {
  const button = document.querySelector('#criar-tarefa');
  button.addEventListener('click', addTask);
}
buttonEvent();
