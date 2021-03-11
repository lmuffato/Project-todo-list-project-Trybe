// Bloco de inicialização de variáveis globais

const addTaskButton = document.getElementById('criar-tarefa');
const inputTask = document.getElementById('texto-tarefa');
const taskList = document.getElementById('lista-tarefas');
const clearButton = document.getElementById('apaga-tudo');
const saveButton = document.getElementById('salvar-tarefas');
const removeCompletedButton = document.getElementById('remover-finalizados');
const muveUpButton = document.getElementById('mover-cima');
const moveDownButton = document.getElementById('mover-baixo');
let selectedTask = null;

// bloco de declaração de funções
function markTask(event) {
  if (selectedTask === null) {
    selectedTask = event.target;
  } else if (event.target !== selectedTask) {
    selectedTask.classList.remove('selected');
    selectedTask = event.target;
  }
  selectedTask.classList.add('selected');
}

function markCompleted(event) {
  const testedTask = event.target;
  if (testedTask.className.includes('completed')) {
    testedTask.classList.remove('completed');
  } else {
    testedTask.classList.add('completed');
  }
}
function addTask() {
  if (inputTask.value !== '') {
    const task = document.createElement('li');
    task.className = 'task';
    task.innerText = inputTask.value;
    inputTask.value = '';
    task.addEventListener('click', markTask);
    task.addEventListener('dblclick', markCompleted);
    taskList.appendChild(task);
  } else {
    alert('Insira o conteúdo da tarefa');
  }
}

function clearTaskList() {
  document.getElementById('lista-tarefas').innerHTML = '';
}

function removeCompletedTasks() {
  const completedTasks = document.getElementsByClassName('completed');
  completedTasks.clear();
}

function saveTaskList() {
  localStorage.setItem('taskList', taskList.innerHTML);
  alert('A lista foi salva no browser');
}

function moveTask() {

}

function recoverySavedTaskList() {
  if (localStorage.getItem('taskList') !== null) {
    taskList.innerHTML = localStorage.getItem('taskList');
    const tasks = document.getElementsByClassName('task');
    for (let index = 0; index < tasks.length; index += 1) {
      tasks[index].addEventListener('click', markTask);
      tasks[index].addEventListener('dblclick', markCompleted);
    }
    selectedTask = document.querySelector('.selected');
  }
}

// Bloco de criação de escutadores de eventos

addTaskButton.addEventListener('click', addTask);
clearButton.addEventListener('click', clearTaskList);
removeCompletedButton.addEventListener('click', removeCompletedTasks);
saveButton.addEventListener('click', saveTaskList);
muveUpButton.addEventListener('click', moveTask);
moveDownButton.addEventListener('click', moveTask);

// Bloco de ações de inicialização da página

recoverySavedTaskList();
