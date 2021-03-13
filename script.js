// Requisito 5 e 6 - Clicando no Botão e adicionando uma nova lista ordenada
function newList() {
  const getTextoTarefa = document.querySelector('#texto-tarefa');
  const getCriarTarefa = document.querySelector('#criar-tarefa');
  const getListaTarefa = document.querySelector('#lista-tarefas');

  getCriarTarefa.addEventListener('click', () => {
    if (getTextoTarefa.value.length > 0) {
      const novaLista = document.createElement('li');
      novaLista.innerText = getTextoTarefa.value;
      novaLista.className = 'item';
      getListaTarefa.appendChild(novaLista);
      getTextoTarefa.value = '';
    }
  });
}
newList();

// Requisito 7
// Exercício feito com a ajuda do código Lucas Andrade
// Link: https://github.com/tryber/sd-010-a-project-todo-list/blob/cdc6f5084c225c6852fcfe3e5acd1ac6269c540f/script.js
function changingBackground(event) {
  const eventTarget = event.target;
  eventTarget.style.backgroundColor = 'rgb(128, 128, 128)';
}

function eventchangeBackground() {
  const getListaTarefa = document.getElementById('lista-tarefas');
  getListaTarefa.addEventListener('click', changingBackground);
}
eventchangeBackground();
