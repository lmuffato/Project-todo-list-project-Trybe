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

/*function clearSelectedTasks() {
  
}*/

function changeBgList(event) {
  const listSelect = event.target;
  // listSelect.setAttribute('style', 'background-color: rgb(128, 128, 128);');
  listSelect.classList.add('li-color');
}

document.getElementById('lista-tarefas').addEventListener('click', changeBgList);

function completeTasks(event) {
  const taskCompleted = event.target;
  if (taskCompleted.classList.contains('completed') === true) {
    taskCompleted.classList.remove('completed');
  } else {
    taskCompleted.classList.add('completed');
  }
}

document.getElementById('lista-tarefas').addEventListener('dblclick', completeTasks);
