function createTask() {
  const inputTask = document.getElementById('texto-tarefa');
  const olList = document.getElementById('lista-tarefas');

  if (!inputTask.value) {
    alert('Escreva algo');
  } else {
    const createTaskElement = document.createElement('li');
    createTaskElement.innerText = inputTask.value;
    createTaskElement.classList.add('task');
    olList.appendChild(createTaskElement);
    inputTask.value = '';
  }
}

function addTask() {
  const addTaskBtn = document.getElementById('criar-tarefa');
  addTaskBtn.addEventListener('click', createTask);
}

function cleanSelected() {
  const tasks = document.querySelectorAll('.task');
  for (let index = 0; index < tasks.length; index += 1) {
    tasks[index].classList.remove('selected');
  }
}

function selectTask() {
  const task = document.querySelector('#lista-tarefas');
  task.addEventListener('click', (event) => {
    cleanSelected();
    event.target.classList.add('selected');
  });
}

function dblClick() {
  const task = document.querySelector('#lista-tarefas');
  task.addEventListener('dblclick', (event) => {
    event.target.classList.toggle('completed');
  });
}

function clearAllTasks() {
  const clearBtn = document.getElementById('apaga-tudo');

  clearBtn.addEventListener('click', (_event) => {
    const task = document.querySelector('#lista-tarefas');
    const tasks = document.querySelectorAll('.task');

    for (let index = 0; index < tasks.length; index += 1) {
      task.removeChild(task.lastChild);
    }
  });
}

window.onload = () => {
  addTask();
  selectTask();
  dblClick();
  clearAllTasks();
};
