const createTask = document.querySelector('#criar-tarefa');
const taskList = document.querySelector('#lista-tarefas');
const taskText = document.querySelector('#texto-tarefa');

function createLi() {
  let creatingLi = document.createElement('li');
  let textValue = taskText.value;
  creatingLi.innerText = textValue;

  taskList.appendChild(creatingLi);
  taskText.value = '';
}

createTask.addEventListener('click', createLi);
