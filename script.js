const inputText = document.getElementById('texto-tarefa');
let buttonTarefa = document.getElementById('criar-tarefa');
const olTarefas = document.getElementById('lista-tarefas');

function criar () {
  const lista = document.createElement('li');
  const node = document.createTextNode(inputText.value);
  lista.appendChild(node);
  olTarefas.appendChild(lista);
  inputText.value = '';
}
  buttonTarefa.addEventListener('click', criar);