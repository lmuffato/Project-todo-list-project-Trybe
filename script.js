function addTask() {
  const eachTask = document.createElement('li');
  eachTask.innerText = document.querySelector('#texto-tarefa').value;
  document.querySelector('#texto-tarefa').value = '';
  document.querySelector('#lista-tarefas').appendChild(eachTask);
}

const buttonAddTask = document.querySelector('#criar-tarefa');
buttonAddTask.addEventListener('click', addTask);
