const list = document.querySelector('#lista-tarefas');
const creatTaskButton = document.querySelector('#criar-tarefa');
const clearTasksButton = document.querySelector('#apaga-tudo');
const clearCompletedButton = document.querySelector('#remover-finalizados');
const saveTasksButton = document.querySelector('#salvar-tarefas');

function creatList() {
  const input = document.querySelector('#texto-tarefa');
  const inputTask = input.value;
  if (inputTask !== '') {
    const newList = document.createElement('li');
    newList.innerHTML = inputTask;
    list.appendChild(newList);
    input.value = '';
  }
}

function selectList(e) {
  for (let i = 0; i < list.children.length; i += 1) {
    if (list.children[i] !== e.target) {
      list.children[i].style.backgroundColor = 'white';
    }
  }
  e.target.style.backgroundColor = 'rgb(128, 128, 128)';
}

function completTask(e) {
  const targetTask = e.target;
  if (targetTask.className !== 'completed') {
    targetTask.className = 'completed';
  } else {
    targetTask.className = 'no-completed';
  }
}

function clearTasks() {
  const reset = document.querySelector('#lista-tarefas');
  reset.innerHTML = '';
}

function clearComplet() {
  const completed = document.querySelectorAll('.completed');
  for (let i = 0; i <= completed.length; i += 1) {
    if (completed[i].className === 'completed') {
      completed[i].remove();
    }
  }
}

function saveTasks() {
  localStorage.setItem(1, list.innerHTML);
}

function loadSavedTasks() {
  list.innerHTML = localStorage.getItem(1);
}

window.onload = loadSavedTasks;

creatTaskButton.addEventListener('click', creatList);
list.addEventListener('click', selectList);
list.addEventListener('dblclick', completTask);
clearTasksButton.addEventListener('click', clearTasks);
clearCompletedButton.addEventListener('click', clearComplet);
saveTasksButton.addEventListener('click', saveTasks);
