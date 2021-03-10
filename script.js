const task = document.querySelector('#lista-tarefas');
const tasks = document.querySelectorAll('.task');

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

window.onload = () => {
  addTask();
};
