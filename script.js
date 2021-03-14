function newTask() {
  const createLi = document.createElement('li');
  createLi.className = 'tasks';
  createLi.innerText = document.getElementById('texto-tarefa').value;
  document.getElementById('lista-tarefas').appendChild(createLi);
  document.getElementById('texto-tarefa').value = '';
}

document.getElementById('criar-tarefa').addEventListener('click', newTask);