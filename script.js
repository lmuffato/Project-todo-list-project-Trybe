const buttonAddTask = document.getElementById('criar-tarefa');

function createTask() {
  const taskList = document.getElementById('lista-tarefas');
  const textList = document.getElementById('texto-tarefa').value;
  const taskItems = document.createElement('li');

  taskItems.innerText = textList;
  taskList.appendChild(taskItems);
}

function clearInput() {
  document.getElementById('texto-tarefa').value = '';
}

buttonAddTask.addEventListener('click', createTask);
buttonAddTask.addEventListener('click', clearInput);
