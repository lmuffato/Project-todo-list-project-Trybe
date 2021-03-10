const textBox = document.getElementById('texto-tarefa');

const createTaskBtn = document.getElementById('criar-tarefa');

createTaskBtn.innerText = 'AdicionarTarefa';

const toDoList = document.getElementById('lista-tarefas');

const listItens = document.getElementsByTagName('li');

function deleteSelectClass() {
  console.log(listItens);
  for (let index = 0; index < listItens.length; index += 1) {
    listItens[index].classList.remove('selected');
  }
}

function addSelectClass(e) {
  deleteSelectClass();
  e.target.className = 'selected';
}

function addTaskToList() {
  const task = textBox.value;
  const taskElement = document.createElement('li');
  taskElement.innerText = task;
  taskElement.addEventListener('click', addSelectClass);
  toDoList.appendChild(taskElement);
  textBox.value = '';
}

createTaskBtn.addEventListener('click', addTaskToList);

/* function changeBackgroundColor(e) {
  e.target.style.backgroundColor = 'rgb(128, 128, 128)';
}

function selectItem() {
  for (let index = 0; index < listItens.length; index += 1) {
    listItens[index].addEventListener('click', changeBackgroundColor);
  }
}
selectItem(); */
