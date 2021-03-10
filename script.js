const createTaskBtn = document.getElementById('criar-tarefa');
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
    allTasks[index].className = 'task';
  }
  e.target.classList.add('selected');
  // selectedItem = tasks.findIndex((item) => item === e.target.innerText);
}

createTaskBtn.addEventListener('click', addTask);
taskList.addEventListener('click', selectItem);
