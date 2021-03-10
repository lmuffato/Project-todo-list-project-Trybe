const textBox = document.getElementById('texto-tarefa');

const createTaskBtn = document.getElementById('criar-tarefa');
createTaskBtn.innerText = 'AdicionarTarefa';

const toDoList = document.getElementById('lista-tarefas');

function addTaskToList() {
  const task = textBox.value;
  const taskElement = document.createElement('li');
  taskElement.innerText = task;
  toDoList.append(taskElement);
  textBox.value = '';
}

createTaskBtn.addEventListener('click', addTaskToList);
