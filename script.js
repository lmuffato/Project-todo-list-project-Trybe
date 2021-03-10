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

window.onload = () => {
  addTask();
  selectTask();
};
