// Criar uma função para poder adicionar novas tarefas a lista e limpar o input
function clearInput() {
  const input = document.querySelector('#texto-tarefa');
  input.value = '';
}

function addTask() {
  const list = document.querySelector('#lista-tarefas');
  const task = document.createElement('li');
  const inputValue = document.querySelector('#texto-tarefa').value;

  task.innerText = inputValue;
  list.appendChild(task);
  clearInput();
}

function buttonEvent() {
  const button = document.querySelector('#criar-tarefa');
  button.addEventListener('click', addTask);
}
buttonEvent();
