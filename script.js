const inputText = document.getElementById('texto-tarefa');
inputText.value = '';
const botAdicionar = document.getElementById('criar-tarefa');
let listaOl = document.getElementById('lista-tarefas');
// let listaLocalStoryString = listaOl;
const buttonClearAll = document.getElementById('apaga-tudo');
let item;
const buttonClearCheckeds = document.getElementById('remover-finalizados');
const buttonSalve = document.querySelector('#salvar-tarefas');
const myList = document.getElementById('myList');
// let listaLocalStoryString = JSON.parse(localStorage.getItem('listaCompleta'));
myList.innerHTML = listaLocalStoryString.list;
listaOl = myList.firstElementChild;

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

function eventRemoveCheckeds() {
  const li = document.querySelectorAll('.completed');
  for (let index = 0; index < li.length; index += 1) {
    const parentLi = li[index].parentElement;
    parentLi.removeChild(li[index]);
  }
}

function clearChecked() {
  buttonClearCheckeds.addEventListener('click', eventRemoveCheckeds);
}

function eventSaveList() {
  const getInnerHTML = {
    list: listaOl.parentNode.innerHTML,
  };
  const getInnerHTMLJSON = JSON.stringify(getInnerHTML);
  localStorage.setItem('listaCompleta', getInnerHTMLJSON);
  listaLocalStoryString = JSON.parse(localStorage.getItem('listaCompleta'));
}

function salvaLista() {
  buttonSalve.addEventListener('click', eventSaveList);
}

function clickBtnAdicionar() {
  botAdicionar.addEventListener('click', concatList);
  botAdicionar.addEventListener('click', addBackgroudColorInElement);
  botAdicionar.addEventListener('click', checkElement);
}

clickBtnAdicionar();
concatList();
addBackgroudColorInElement();
checkElement();
clearAll();
clearChecked();
salvaLista();
