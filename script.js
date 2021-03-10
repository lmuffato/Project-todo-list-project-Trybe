function createTask() {
  const selectInput = document.querySelector('#texto-tarefa');
  const list = document.createElement('li');
  const tasks = document.querySelector('#lista-tarefas');
  list.innerText = selectInput.value;
  tasks.appendChild(list);
  selectInput.value = '';
}

const task = document.querySelector('#criar-tarefa');
task.addEventListener('click', createTask);
