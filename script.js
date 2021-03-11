
const btnTask = document.querySelector('#criar-tarefa');
const tasksList = document.querySelector('#lista-tarefas');
btnTask.addEventListener('click', function () {
  let textTask = document.getElementById('texto-tarefa').value;
  document.getElementById('texto-tarefa').value = '';
  let list = document.createElement('li');
  list.innerText = textTask;
  tasksList.appendChild(list);
})