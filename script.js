const getButton = document.querySelector('.botao-tarefa');
const getInput = document.getElementById('texto-tarefa');
const getList = document.getElementById('lista-tarefas');
const getClear = document.querySelector('#apaga-tudo');
const getClearDone = document.getElementById('remover-finalizados');

function clearSelecteds() {
  const items = document.querySelectorAll('li');
  for (let index = 0; index < items.length; index += 1) {
    items[index].style.backgroundColor = 'transparent';
  }
}

function riskItem() {
  if (this.className === '') {
    this.className = 'completed';
  } else {
    this.className = '';
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
    task.addEventListener('click', clearSelecteds);
    task.addEventListener('click', selectItem);
    task.addEventListener('dblclick', riskItem);
  }
}

function clearInput() {
  getInput.value = '';
}

function clearList() {
  const getItems = document.querySelectorAll('li');

  for (let index = 0; index < getItems.length; index += 1) {
    getList.removeChild(getList.lastChild);
  }
}

function clearDone() {
  let done = document.querySelectorAll('li');
 
  for (let index = 0; index < done.length; index += 1) {
    if (done[index].className === 'completed') {
      done[index].remove();
    }
  }
}

getButton.addEventListener('click', insertTask);
getButton.addEventListener('click', clearInput);
getClear.addEventListener('click', clearList);
getClearDone.addEventListener('click', clearDone);
