const criarTarefa = document.querySelector('#criar-tarefa');
const textoTarefa = document.querySelector('#texto-tarefa');
const listaTarefas = document.querySelector('#lista-tarefas');

function criarNovaTarefa() {
  const novaLi = document.createElement('li');
  novaLi.innerText = textoTarefa.value;
  listaTarefas.appendChild(novaLi);
  textoTarefa.value = '';
}
criarTarefa.addEventListener('click', criarNovaTarefa);