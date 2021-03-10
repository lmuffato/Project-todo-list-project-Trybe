const listaTarefas = document.querySelector('#lista-tarefas');
const adicionarTarefaButton = document.querySelector('#criar-tarefa');
const adicionarTarefaInput = document.querySelector('#texto-tarefa');

function criarElementoHtmlTarefa(nomeDaTarefa) {
  let tarefaEl = document.createElement('li');
  tarefaEl.className = 'tarefa';
  tarefaEl.innerHTML = nomeDaTarefa;
  return tarefaEl;
}

function adicionaTarefa() {
  let tarefaParaAdicionar = adicionarTarefaInput.value;
  const tarefa = criarElementoHtmlTarefa(tarefaParaAdicionar);
  listaTarefas.appendChild(tarefa);
  adicionarTarefaInput.value = "";
}

adicionarTarefaButton.addEventListener('click', adicionaTarefa);