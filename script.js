document.getElementById('criar-tarefa').addEventListener('click', () => {
  let btnContainer = document.getElementById('texto-tarefa').value;
  let li = document.createElement('li');
  let task = document.createTextNode(btnContainer);

  li.appendChild(task);
  document.getElementById('lista-tarefas').appendChild(li);
  document.getElementById('texto-tarefa').value = '';
});