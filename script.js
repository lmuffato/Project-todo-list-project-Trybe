const getButton = document.querySelector('.botao-tarefa');
const getInput = document.getElementById('texto-tarefa');
const getList = document.getElementById('lista-tarefas');

function InsertTask() {
  const task = document.createElement('li');
  task.innerText = getInput.value;
  getList.appendChild(task);
}

getButton.addEventListener('click', InsertTask);
