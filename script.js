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

  localStorage.removeItem('tasks');
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
  const tasks = document.querySelectorAll('.task');
  const taskArray = [];

  for (let index = 0; index < tasks.length; index += 1) {
    const taskObj = {
      name: tasks[index].innerHTML,
      completed: tasks[index].classList.contains('completed'),
    };
    taskArray.push(taskObj);
  }

  localStorage.setItem('tasks', JSON.stringify(taskArray));
}

function getTasksFromStorage() {
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  if (!tasks) return;
  console.log(tasks);
  const taskList = document.getElementById(listaTarefas);

  for (let index = 0; index < tasks.length; index += 1) {
    const taskItem = document.createElement('li');
    taskItem.innerHTML = tasks[index].name;
    taskItem.className = 'task';
    if (tasks[index].completed) {
      taskItem.classList.add('completed');
    }
    taskItem.onclick = () => selectTask(taskItem);
    taskItem.ondblclick = () => toggleDoneTask(taskItem);

    taskList.appendChild(taskItem);
  }
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

  getTasksFromStorage();
};
