const getButton = document.querySelector('.botao-tarefa');
const getInput = document.getElementById('texto-tarefa');
const getList = document.getElementById('lista-tarefas');

function InsertTask() {
  if (getInput.value !== '') {
  const task = document.createElement('li');
  task.innerText = getInput.value;
  getList.appendChild(task);
  }
}

function clearInput() {
  getInput.value = '';
}

getButton.addEventListener('click', InsertTask);
getButton.addEventListener('click', clearInput);
