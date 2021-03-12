const creatTaskButton = document.querySelector('#criar-tarefa');
const task = document.querySelector('#texto-tarefa');
const taskList = document.querySelector('#lista-tarefas');

function creatTask() {
  const list = document.createElement('li');
  list.innerText = task.value;
  task.value = '';
  taskList.appendChild(list);
}
creatTaskButton.addEventListener('click', creatTask);
