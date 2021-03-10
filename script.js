// Requirement 5;

function addTask() {
  const selectInputText = document.querySelector('#texto-tarefa');
  const selectOL = document.querySelector('#lista-tarefas');
  const createLI = document.createElement('li');
  createLI.innerHTML = selectInputText.value;
  selectOL.appendChild(createLI);
  selectInputText.value = '';
}

function createTask() {
  const selectButton = document.querySelector('#criar-tarefa');
  selectButton.addEventListener('click', addTask);
}

createTask();
