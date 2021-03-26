const listaTarefas = 'lista-tarefas';

function selectTask(item) {
  const taskItem = item;
  const tasksList = document.getElementsByClassName('task');

  for (let index = 0; index < tasksList.length; index += 1) {
    tasksList[index].style.backgroundColor = '';
    tasksList[index].classList.remove('selected');
  }

  taskItem.classList.add('selected');
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

// Referência: https://github.com/tryber/sd-010-a-project-todo-list/pull/94/files
function moveTaskDown() {
  const taskList = document.getElementById('lista-tarefas');
  const selectedTask = document.querySelector('.selected');
  if (selectedTask !== null) {
    const nextTask = selectedTask.nextElementSibling;
    if (taskList.lastChild !== selectedTask) {
      nextTask.parentNode.insertBefore(nextTask, selectedTask);
    }
  }
}

// Referência: https://github.com/tryber/sd-010-a-project-todo-list/pull/94/files
function moveTaskUp() {
  const selectedTask = document.querySelector('.selected');
  const taskList = document.getElementById('lista-tarefas');
  if(!selectedTask){
    return;
  }
  if(taskList.firstChild.nextElementSibling !== selectedTask){
    const afterTask = selectedTask.previousElementSibling;
    afterTask.parentNode.insertBefore(selectedTask, afterTask);
  }
}

window.onload = () => {
  const createTaskButton = document.getElementById('criar-tarefa');
  const removeButtonElement = document.getElementById('remover-finalizados');
  const clearButtonElement = document.getElementById('apaga-tudo');
  const saveTaskButtonElement = document.getElementById('salvar-tarefas');
  const moveUpButtonElement = document.getElementById('mover-cima');
  const moveDownButtonElement = document.getElementById('mover-baixo');

  removeButtonElement.onclick = removeDoneTask;
  createTaskButton.onclick = createTask;
  clearButtonElement.onclick = clearTaskButton;
  saveTaskButtonElement.onclick = saveAllTasks;
  moveUpButtonElement.onclick = moveTaskUp;
  moveDownButtonElement.onclick = moveTaskDown;

  getTasksFromStorage();
};
