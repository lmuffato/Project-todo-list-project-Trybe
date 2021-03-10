const inputAddTask = document.getElementById('texto-tarefa');
const buttonAddTask = document.getElementById('criar-tarefa');
const tasksList = document.getElementById('lista-tarefas');
const buttonClearTasks = document.getElementById('apaga-tudo');
const buttonClearCompleted = document.getElementById('remover-finalizados');
const buttonSaveTasks = document.getElementById('salvar-tarefas');

const colors = {
  selected: 'rgb(128, 128, 128)',
};

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

function buttonActions(button, arrayOfActions) {
  for (let index = 0; index < arrayOfActions.length; index += 1) {
    const action = arrayOfActions[index];
    button.addEventListener('click', action);
  }
}

function addTask() {
  const newTask = document.createElement('li');
  newTask.textContent = inputAddTask.value;
  tasksList.appendChild(newTask);
  inputAddTask.value = '';
}

function getTasks() {
  const tasks = tasksList.children;
  for (let index = 0; index < tasks.length; index += 1) {
    const task = tasks[index];
    task.addEventListener('click', tasksFunctions.selectTask);
    task.addEventListener('dblclick', tasksFunctions.completeTask);
  }
  return tasks;
}

function clearTasks() {
  const tasks = document.querySelectorAll('li');
  tasks.forEach((task) => {
    task.remove();
  });
}

function clearCompleted() {
  const tasks = document.querySelectorAll('li');
  tasks.forEach((task) => {
    if (task.classList.contains('completed')) {
      task.remove();
    }
  });
}

function saveTasks() {
  const tasks = getTasks();
  const tasksToStorage = [];
  for (let index = 0; index < tasks.length; index += 1) {
    let task = tasks[index];
    const taskContent = task.textContent;
    const taskIsCompleted = task.classList.contains('completed');
    task = `${taskContent}/${taskIsCompleted}`;
    tasksToStorage.push(task);
  }
  localStorage.setItem('tasks', tasksToStorage);
}

function taskToObject(currentTask) {
  let task = currentTask;
  task = task.split('/');
  task = {
    content: task[0],
    isCompleted: task[1] === 'true',
  };
  return task;
}

function markIfTaskIsCompleted(task, taskElement) {
  if (task.isCompleted === true) {
    taskElement.classList.add('completed');
  }
}

function loadTasks() {
  const storageTasks = localStorage.getItem('tasks');
  const tasks = storageTasks.split(',');
  for (let index = 0; index < tasks.length; index += 1) {
    if (storageTasks !== '') {
      const task = taskToObject(tasks[index]);
      console.log(task);
      const taskElement = document.createElement('li');
      taskElement.textContent = task.content;
      markIfTaskIsCompleted(task, taskElement);
      tasksList.appendChild(taskElement);
    }
  }
  getTasks();
}

loadTasks();
buttonActions(buttonAddTask, [addTask, getTasks]);
buttonActions(buttonClearTasks, [clearTasks]);
buttonActions(buttonClearCompleted, [clearCompleted]);
buttonActions(buttonSaveTasks, [saveTasks]);
