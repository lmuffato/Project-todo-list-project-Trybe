const inputTask = document.getElementById('texto-tarefa');
const listTasks = document.getElementById('lista-tarefas');
const buttonCreateTasks = document.getElementById('criar-tarefa');

const createTasks = () => {
  const task = document.createElement('li')
  listTasks.appendChild(task);
  task.innerText = inputTask.value;
  inputTask.value = '';
};

buttonCreateTasks.addEventListener('click', createTasks);
