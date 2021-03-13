const inputText = document.getElementById('texto-tarefa');
inputText.value = '';
const botAdicionar = document.getElementById('criar-tarefa');
const listaOl = document.getElementById('lista-tarefas');
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
    li[i].style.backgroundColor = 'white'
  }
  e.target.style.backgroundColor = 'rgb(128, 128, 128)';
}

function addBackgroudColorInElement() {
  const li = document.querySelectorAll('.listElement');
  console.log(li);
  for (let i = 0; i < li.length; i += 1) {
    li[i].addEventListener('click', changeBackgroudColorElement);
  }
}

function clickBtnAdicionar() {
  botAdicionar.addEventListener('click', concatList);
  botAdicionar.addEventListener('click', addBackgroudColorInElement);
}

clickBtnAdicionar();
