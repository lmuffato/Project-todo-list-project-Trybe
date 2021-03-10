const inputAddTask = document.getElementById('texto-tarefa');
const buttonAddTask = document.getElementById('criar-tarefa');
const tasksList = document.getElementById('lista-tarefas');

const colors = {
  selected: 'rgb(128, 128, 128)',
};

function addTask() {
  const newTask = document.createElement('li');
  newTask.textContent = inputAddTask.value;
  tasksList.appendChild(newTask);
  inputAddTask.value = '';
}

function selectTask(element) {
  const task = element.target;
  task.style.backgroundColor = colors.selected;
}

function getTasks() {
  const tasks = tasksList.children;
  for (let index = 0; index < tasks.length; index += 1) {
    const task = tasks[index];
    task.addEventListener('click', selectTask);
  }
}

buttonAddTask.addEventListener('click', addTask);
buttonAddTask.addEventListener('click', getTasks);
