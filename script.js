const inputText = document.getElementById('texto-tarefa');
inputText.value = '';
const botAdicionar = document.getElementById('criar-tarefa');
const listaOl = document.getElementById('lista-tarefas');
const buttonClearAll = document.getElementById('apaga-tudo');
let item;

function concatList() {
  if (inputText.value !== '') {
    item = document.createElement('li');
    item.innerText = inputText.value;
    item.className = 'listElement';
    listaOl.appendChild(item);
    inputText.value = '';
  }
}

function changeBackgroudColorElement(e) {
  const li = document.querySelectorAll('.listElement');
  for (let i = 0; i < li.length; i += 1) {
    li[i].style.backgroundColor = 'white';
  }
  e.target.style.backgroundColor = 'rgb(128, 128, 128)';
}

function addBackgroudColorInElement() {
  const li = document.querySelectorAll('.listElement');
  for (let i = 0; i < li.length; i += 1) {
    li[i].addEventListener('click', changeBackgroudColorElement);
  }
}

function riskElement(e) {
  if (!e.target.classList.contains('completed')) {
    e.target.className += ' completed';
    e.target.style.textDecoration = 'line-through solid rgb(0, 0, 0)';
  } else {
    e.target.classList.remove('completed');
    e.target.style.textDecoration = 'none';
  }
}
function checkElement() {
  const li = document.querySelectorAll('.listElement');
  for (let i = 0; i < li.length; i += 1) {
    li[i].addEventListener('dblclick', riskElement);
  }
}

function eventRemoveAllItens() {
  const li = document.querySelectorAll('.listElement');
  for (let i = 0; i < li.length; i += 1) {
    const parentLi = li[i].parentElement;
    parentLi.removeChild(li[i]);
  }
}

function clearAll() {
  buttonClearAll.addEventListener('click', eventRemoveAllItens);
}

function clickBtnAdicionar() {
  botAdicionar.addEventListener('click', concatList);
  botAdicionar.addEventListener('click', addBackgroudColorInElement);
  botAdicionar.addEventListener('click', checkElement);
}

clickBtnAdicionar();
clearAll();
