// Requisito 5 e 6 - Clicando no Botão e adicionando uma nova lista ordenada
function newList() {
  const getTextoTarefa = document.querySelector('#texto-tarefa');
  const getCriarTarefa = document.querySelector('#criar-tarefa');
  const getListaTarefa = document.querySelector('#lista-tarefas');

  getCriarTarefa.addEventListener('click', () => {
    if (getTextoTarefa.value.length > 0) {
      let novaLista = document.createElement('li');
      novaLista.innerText = getTextoTarefa.value;
      novaLista.className = 'item';
      getListaTarefa.appendChild(novaLista);
      getTextoTarefa.value = '';
    }
  });
}
newList();

// Requisito 7

function changingBackground(event) {
  let eventTarget = event.target;
  eventTarget.style.backgroundColor = 'rgb(128, 128, 128)';
}

function eventchangeBackground() {
  const getListaTarefa = document.getElementById('lista-tarefas');

  getListaTarefa.addEventListener('click',changingBackground);
}
eventchangeBackground();
