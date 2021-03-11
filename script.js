document.getElementById('criar-tarefa').addEventListener('click', () => {
  const btnContainer = document.getElementById('texto-tarefa').value;
  const li = document.createElement('li');
  li.className = 'item';
  const task = document.createTextNode(btnContainer);

  li.appendChild(task);
  document.getElementById('lista-tarefas').appendChild(li);
  document.getElementById('texto-tarefa').value = '';

  li.addEventListener('click', function(event) {
    const colorTask = event.target;
    colorTask.style.backgroundColor = 'rgb(128, 128, 128)';
  })
});
