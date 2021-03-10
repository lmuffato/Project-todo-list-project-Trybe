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

function changeBgList(event) {
  const listSelect = event.target;
  const colorBackground = 'rgb(128, 128, 128)';

  listSelect.style.backgroundColor = colorBackground;
}

document.getElementById('lista-tarefas').addEventListener('click', changeBgList);
