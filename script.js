const btnCriarTarefa = document.getElementById('criar-tarefa');
const listTasks = document.getElementById('lista-tarefas');
const inputValue = document.getElementById('texto-tarefa');

function createTask() {
  if (inputValue.value !== '') {
    const li = document.createElement('li');
    listTasks.appendChild(li);
    li.innerHTML = inputValue.value;
    inputValue.value = '';
  }
}

btnCriarTarefa.addEventListener('click', createTask);
