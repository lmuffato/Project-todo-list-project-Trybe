// Variaveis Gerais
const button = document.getElementById('criar-tarefa')
const listaTarefas = document.getElementById('lista-tarefas');
const textoTarefa = document.getElementById('texto-tarefa');

// criar botão
button.innerText = 'Adicionar'
function click() {
  let buttonAction = document.createElement('li')
  buttonAction.innerText = textoTarefa.value;
  listaTarefas.appendChild(buttonAction);
  textoTarefa = '';
}
button.addEventListener('click', click);
