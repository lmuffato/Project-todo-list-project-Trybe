const listaTarefas = document.querySelector('#lista-tarefas');
const adicionarTarefaButton = document.querySelector('#criar-tarefa');
const adicionarTarefaInput = document.querySelector('#texto-tarefa');
const apagaTudoButton = document.querySelector('#apaga-tudo');
const removeFinalizadosButton = document.querySelector('#remover-finalizados');
const salvarTarefasButton = document.querySelector('#salvar-tarefas');

function selecionarTarefa(tarefaElementoHtml) {
  const tarefaClicada = tarefaElementoHtml;
  document.querySelectorAll('ol li').forEach((el) => el.classList.remove('selected'));
  tarefaClicada.classList.add('selected');
}

function completarTarefa(tarefaElementoHtml) {
  const tarefaClicada = tarefaElementoHtml;
  tarefaClicada.classList.toggle('completed');
}

function criarElementoHtmlTarefa(nomeDaTarefa, classeDaTarefa) {
  const tarefaEl = document.createElement('li');
  tarefaEl.className = classeDaTarefa || 'tarefa';
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

function removerTodasTarefas() {
  document.querySelectorAll('ol li').forEach((el) => el.remove());
}

function removerTarefasFinalizadas() {
  document.querySelectorAll('.completed').forEach((el) => el.remove());
}

function salvarTarefas() {
  const tarefas = [];
  document.querySelectorAll('ol li').forEach((el) => {
    tarefas.push({
      className: el.className,
      text: el.innerHTML,
    });
  });
  localStorage.setItem('tasks', JSON.stringify(tarefas));
}

function carregarTarefas() {
  const tarefasSalvas = JSON.parse(localStorage.getItem('tasks'));
  const tarefasEl = [];
  tarefasSalvas.forEach((el) => tarefasEl.push(criarElementoHtmlTarefa(el.text, el.className)));
  tarefasEl.forEach((el) => listaTarefas.appendChild(el));
}

window.onload = carregarTarefas;

adicionarTarefaButton.addEventListener('click', adicionaTarefa);
apagaTudoButton.addEventListener('click', removerTodasTarefas);
removeFinalizadosButton.addEventListener('click', removerTarefasFinalizadas);
salvarTarefasButton.addEventListener('click', salvarTarefas);
