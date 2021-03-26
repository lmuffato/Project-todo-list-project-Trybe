const list = document.getElementById('lista-tarefas');

const addBtn = document.querySelector('#criar-tarefa');

const liElement = document.getElementsByTagName('li');

const removeAllBtn = document.getElementById('apaga-tudo');

const removeCheck = document.getElementById('remover-finalizados');

function addList() {
  const liList = document.createElement('li');
  const text = document.querySelector('#texto-tarefa');
  const textValue = text.value;
  liList.innerHTML = textValue;
  list.appendChild(liList);
  text.value = '';
}
console.log();

addBtn.addEventListener('click', addList);

function check(event) {
  const eventTarget = event.target;
  if (eventTarget.classList.contains('completed')) {
    eventTarget.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}

list.addEventListener('dblclick', check);

function paintGrey(event) {
  const eventTarget = event.target;
  for (let index = 0; index < liElement.length; index += 1) {
    if (liElement[index].style.backgroundColor === 'rgb(128, 128, 128)') {
      liElement[index].style.removeProperty('background-color');
    }
  }
  eventTarget.style.backgroundColor = 'rgb(128,128,128)';
}

list.addEventListener('click', paintGrey);

function addClassCompleted() {
  for (let index = 0; index < liElement.length; index += 1) {
    liElement[index].classList.toggle('completed');
  }
}

addClassCompleted();

function removeAll() {
  list.innerHTML = '';
}

removeAllBtn.addEventListener('click', removeAll);

function removeCheckItem() {
  const selectedItens = document.querySelectorAll('.completed');
  for (let index = 0; index < selectedItens.length; index += 1) {
    if (selectedItens[index].classList.contains('completed')) {
      list.removeChild(selectedItens[index]);
    }
  }
}
removeCheck.addEventListener('click', removeCheckItem);
