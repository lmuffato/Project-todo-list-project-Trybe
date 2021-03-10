const createTaskBtn = document.getElementById('criar-tarefa');
const eraseAllBtn = document.getElementById('apaga-tudo');
const removeCompletedBtn = document.getElementById('remover-finalizados');
const inputTask = document.getElementById('texto-tarefa');
const taskList = document.getElementById('lista-tarefas');
// const tasks = [];
// let selectedItem;

function addTask(e) {
  e.preventDefault();
  const newTaskItem = document.createElement('li');
  newTaskItem.classList.add('task');
  const newTask = inputTask.value;
  // tasks.push(newTask);
  newTaskItem.innerText = newTask;
  taskList.appendChild(newTaskItem);
  inputTask.value = '';
}

function selectItem(e) {
  const allTasks = document.querySelectorAll('.task');
  for (let index = 0; index < allTasks.length; index += 1) {
    allTasks[index].classList.remove('selected');
  }
  e.target.classList.add('selected');
  // selectedItem = tasks.findIndex((item) => item === e.target.innerText);
}

// .toggle retirado da documentação do MDN inspirado pela dica do Johnatas no Plantão
function markCompleted(e) {
  // if (!e.target.classList.contains('completed')) {
  //   e.target.classList.add('completed');
  // } else {
  //   e.target.classList.remove('completed');
  // }
  e.target.classList.toggle('completed');
}

function eraseAll(e) {
  e.preventDefault();
  taskList.innerHTML = '';
  // tasks = [];
}

// .contains() retirado da doc do MDN - https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/contains
function removeCompleted(e) {
  e.preventDefault();
  const allTasks = document.querySelectorAll('.task');
  for (let index = allTasks.length - 1; index >= 0; index -= 1) {
    if (allTasks[index].classList.contains('completed')) {
      allTasks[index].remove();
    }
  }
}

createTaskBtn.addEventListener('click', addTask);
taskList.addEventListener('click', selectItem);
taskList.addEventListener('dblclick', markCompleted);
eraseAllBtn.addEventListener('click', eraseAll);
removeCompletedBtn.addEventListener('click', removeCompleted);
