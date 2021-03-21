const getButton = document.querySelector('.botao-tarefa');
const getInput = document.getElementById('texto-tarefa');
const getList = document.getElementById('lista-tarefas');

function clearSelected() {
  const items = document.querySelectorAll('li');
  for (let index = 0; index < items.length; index += 1) {
    items[index].style.backgroundColor = 'transparent';
  }
}

function selectItem() {
  const painter = this.style;
  painter.backgroundColor = 'rgb(128, 128, 128)';
}

function insertTask() {
  if (getInput.value !== '') {
    const task = document.createElement('li');
    task.innerText = getInput.value;
    getList.appendChild(task);
    task.addEventListener('click', clearSelected);
    task.addEventListener('click', selectItem);
  }
}

function clearInput() {
  getInput.value = '';
}

getButton.addEventListener('click', insertTask);
getButton.addEventListener('click', clearInput);
