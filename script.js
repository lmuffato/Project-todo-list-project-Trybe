const createTaskBtn = document.getElementById('criar-tarefa');
const eraseAllBtn = document.getElementById('apaga-tudo');
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

function markCompleted(e) {
  if (!e.target.classList.contains('completed')) {
    e.target.classList.add('completed');
  } else {
    e.target.classList.remove('completed');
  }
}

function eraseAll(e) {
  e.preventDefault();
  taskList.innerHTML = '';
  // tasks = [];
}

createTaskBtn.addEventListener('click', addTask);
taskList.addEventListener('click', selectItem);
taskList.addEventListener('dblclick', markCompleted);
eraseAllBtn.addEventListener('click', eraseAll);
