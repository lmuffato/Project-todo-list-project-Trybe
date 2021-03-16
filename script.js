const button = document.getElementById('criar-tarefa')
const listaTarefas = document.getElementById('lista-tarefas'); // Variaveis Gerais
const textoTarefa = document.getElementById('texto-tarefa');

// criar botão
function click() {
  const buttonAction = document.createElement('li')
  buttonAction.innerText = textoTarefa.value;
  listaTarefas.appendChild(buttonAction);
  textoTarefa.value = '';
  buttonAction.className = 'list'
}
button.addEventListener('click', click);

const list = document.querySelector('.list')
function listColor(event) {
  event.target.style.backgroundColor = 'rgb(128,128,128)'
}

listaTarefas.addEventListener('click', listColor)