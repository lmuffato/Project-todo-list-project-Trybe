const inputText = document.getElementById('texto-tarefa');
const botAdicionar = document.getElementById('criar-tarefa');
const listaOl = document.getElementById('lista-tarefas');

function concatList() {
  const item = document.createElement('li');
  item.innerText = inputText.value;
  listaOl.appendChild(item);
  inputText.value = null;
}

function addIten() {
  botAdicionar.addEventListener('click', concatList);
}

addIten();
