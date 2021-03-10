const listaTarefas = document.querySelector('#lista-tarefas');
const adicionarTarefaButton = document.querySelector('#criar-tarefa');
const adicionarTarefaInput = document.querySelector('#texto-tarefa');

function selecionarTarefa(tarefaElementoHtml) {
  const tarefaClicada = tarefaElementoHtml;
  document.querySelectorAll('ol li').forEach((el) => el.classList.remove('selected'));
  tarefaClicada.classList.add('selected')
}

function completarTarefa(tarefaElementoHtml) {
  const tarefaClicada = tarefaElementoHtml;
  tarefaClicada.classList.toggle('completed');
}

function criarElementoHtmlTarefa(nomeDaTarefa) {
  const tarefaEl = document.createElement('li');
  tarefaEl.className = 'tarefa';
  tarefaEl.innerHTML = nomeDaTarefa;
  tarefaEl.addEventListener('click', (e) => selecionarTarefa(e.target));
  tarefaEl.addEventListener('dblclick', (e) => completarTarefa(e.target));
  return tarefaEl;
}

function adicionaTarefa() {
  const tarefaParaAdicionar = adicionarTarefaInput.value;
  const tarefa = criarElementoHtmlTarefa(tarefaParaAdicionar);
  listaTarefas.appendChild(tarefa);
  adicionarTarefaInput.value = '';
}

adicionarTarefaButton.addEventListener('click', adicionaTarefa);
