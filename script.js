document.getElementById('criar-tarefa').addEventListener('click', () => {
  let task = document.getElementById('texto-tarefa').value;
  let taskList = document.getElementById('lista-tarefas').innerHTML;
  taskList = taskList + "<li>" + task + '</li>';

  document.getElementById('lista-tarefas').innerHTML = taskList;
})