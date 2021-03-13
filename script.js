const btnCriarTarefa = document.getElementById('criar-tarefa');
const btnClearList = document.getElementById('apaga-tudo');
const btnClearCompleted = document.getElementById('remover-finalizados');
const listTasks = document.getElementById('lista-tarefas');
const inputValue = document.getElementById('texto-tarefa');
const completedTask = document.getElementsByClassName('completed');
let taskItem = document.querySelectorAll('.task');

function selectedTask() {
  listTasks.addEventListener('click', (e) => {
    const task = e.target;
    const taskSelected = document.querySelector('.selected');
    task.classList.add('selected');
    if (taskSelected !== null) {
      taskSelected.classList.remove('selected');
    }
  });
}

function dblClickTask() {
  listTasks.addEventListener('dblclick', (e) => {
    const task = e.target;
    task.classList.toggle('completed');
    if (task.classList.contains('completed')) {
      task.style.textDecoration = 'line-through solid rgb(0, 0, 0)';
    } else {
      task.style.textDecoration = null;
    }
  });
}

function clearList() {
  while (listTasks.firstChild) {
    listTasks.removeChild(listTasks.firstChild);
  }
}

function clearCompletedTask() {
  while (completedTask.length !== 0) {
    completedTask[0].remove();
  }
}

function createTask() {
  if (inputValue.value !== '') {
    const li = document.createElement('li');
    listTasks.appendChild(li);
    li.className = 'task';
    li.innerHTML = inputValue.value;
    inputValue.value = '';
  }
}

window.onload = () => {
  createTask();
  taskItem = document.querySelectorAll('.task');
  selectedTask();
};

dblClickTask();
btnCriarTarefa.addEventListener('click', createTask);

btnClearCompleted.addEventListener('click', clearCompletedTask);
btnClearList.addEventListener('click', clearList);
