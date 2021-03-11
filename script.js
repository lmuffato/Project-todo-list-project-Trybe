// Criar uma função para poder adicionar novas tarefas a lista e limpar o input
function clearInput() {
  const input = document.querySelector('#texto-tarefa');
  input.value = '';
}

function completedTask(event) {
  const task = event.target;

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

  task.innerText = inputValue;
  task.addEventListener('click', backgroundSelected);
  task.addEventListener('dblclick', completedTask);
  list.appendChild(task);
  clearInput();
}

function buttonEvent() {
  const button = document.querySelector('#criar-tarefa');
  button.addEventListener('click', addTask);
}
buttonEvent();
