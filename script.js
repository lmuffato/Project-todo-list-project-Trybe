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

function seletorItem() {
  function seletor() {
    const li = document.querySelectorAll('li');
    for (let index = 0; index < li.length; index += 1) {
      li[index].style.backgroundColor = 'rgb(128, 128, 128)';
      const color = 'rgb(128, 128, 128)';
      li[index].style.backgroundColor = color;
    }
  }
  listaTarefas.addEventListener('click', seletor);
}
seletorItem();

function listaConcluida() {
  function riscada(event) {
    if (event.target.classList.contains('completed')) {
      event.target.classList.remove('completed');
      event.target.style.textDecoration = '';
    } else {
      event.target.classList.add('completed');
      event.target.style.textDecoration = 'line-through solid rgb(0, 0, 0)';
    }
  }
  listaTarefas.addEventListener('dblclick', riscada);
}
listaConcluida();

function LimparTudo() {
  const limparTudo = document.querySelector('#apaga-tudo');
  function funçaoLimparTudo() {
    listaTarefas.innerText = '';
  }
  limparTudo.addEventListener('click', funçaoLimparTudo);
}
LimparTudo();
