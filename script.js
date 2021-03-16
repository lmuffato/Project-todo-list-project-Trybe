const button = document.getElementById('criar-tarefa')
const listaTarefas = document.getElementById('lista-tarefas'); // Variaveis Gerais
const textoTarefa = document.getElementById('texto-tarefa');

// criar botão
button.innerText = 'criar tarefa'
function click() {
  let buttonAction = document.createElement('li')
  buttonAction.innerText = textoTarefa.value;
  listaTarefas.appendChild(buttonAction);
  textoTarefa.value = '';
}
button.addEventListener('click', click);
