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

const tasksFunctions = {
  selectTask(element) {
    const tasks = tasksList.children;
    for (let index = 0; index < tasks.length; index += 1) {
      const task = tasks[index];
      task.style.backgroundColor = 'transparent';
    }

    const task = element.target;
    task.style.backgroundColor = colors.selected;
  },

  completeTask(element) {
    const task = element.target;
    task.classList.toggle('completed');
  },
};

function getTasks() {
  const tasks = tasksList.children;
  for (let index = 0; index < tasks.length; index += 1) {
    const task = tasks[index];
    task.addEventListener('click', tasksFunctions.selectTask);
    task.addEventListener('dblclick', tasksFunctions.completeTask);
  }
}

function buttonActions(button, arrayOfActions) {
  for (let index = 0; index < arrayOfActions.length; index += 1) {
    const action = arrayOfActions[index];
    button.addEventListener('click', action);
  }
}

buttonActions(buttonAddTask, [addTask, getTasks]);
