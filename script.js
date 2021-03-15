// Requisito 5
const input = document.getElementById('texto-tarefa');
const createTaskBtn = document.getElementById('criar-tarefa');
const taskList = document.getElementById('lista-tarefas');

function createTask() {
  if (input.value !== '') {
    const li = document.createElement('li');
    taskList.appendChild(li);
    li.innerHTML = input.value;
    input.value = '';
  }
}

createTaskBtn.addEventListener('click', createTask);
