const listaTarefas = 'lista-tarefas';

function selectTask(item) {
  const taskItem = item;
  const tasksList = document.getElementsByClassName('task');

  for (let index = 0; index < tasksList.length; index += 1) {
    tasksList[index].style.backgroundColor = '';
  }

  taskItem.style.backgroundColor = 'rgb(128,128,128)';
}

function toggleDoneTask(item) {
  const taskItem = item;

  taskItem.classList.toggle('completed');
}

function clearTaskButton() {
  const taskList = document.getElementById(listaTarefas);
  taskList.innerHTML = '';
}

function createTask() {
  const taskList = document.getElementById(listaTarefas);
  const taskInputName = document.getElementById('texto-tarefa');

  const taskItem = document.createElement('li');
  taskItem.innerHTML = taskInputName.value;
  taskItem.className = 'task';
  taskItem.onclick = () => selectTask(taskItem);
  taskItem.ondblclick = () => toggleDoneTask(taskItem);

  taskInputName.value = '';
  taskList.appendChild(taskItem);
}

function removeDoneTask() {
  const taskList = document.getElementById(listaTarefas);
  const taskItems = document.querySelectorAll('.completed');
  for (let index = 0; index < taskItems.length; index += 1) {
    taskList.removeChild(taskItems[index]);
  }
}

function saveAllTasks() {

}

window.onload = () => {
  const createTaskButton = document.getElementById('criar-tarefa');
  const removeButtonElement = document.getElementById('remover-finalizados');
  const clearButtonElement = document.getElementById('apaga-tudo');
  const saveTaskButtonElement = document.getElementById('salvar-tarefas');

  removeButtonElement.onclick = removeDoneTask;
  createTaskButton.onclick = createTask;
  clearButtonElement.onclick = clearTaskButton;
  saveTaskButtonElement.onclick = saveAllTasks;
};
