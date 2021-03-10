const createTaskBtn = document.getElementById('criar-tarefa');
const inputTask = document.getElementById('texto-tarefa');
const taskList = document.getElementById('lista-tarefas');
// const tasks = [];

function addTask(e) {
  e.preventDefault();
  const newTaskItem = document.createElement('li');
  const newTask = inputTask.value;
  // tasks.push(newTask);
  newTaskItem.innerText = newTask;
  taskList.appendChild(newTaskItem);
  inputTask.value = '';
}

function changeItemColor(e) {
  e.target.style.backgroundColor = 'rgb(128, 128, 128)';
}

createTaskBtn.addEventListener('click', addTask);
taskList.addEventListener('click', changeItemColor);