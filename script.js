// Requisito 5 - Clicando no Botão e adicionando uma nova lista
function newList() {
  let getTextoTarefa = document.querySelector('#texto-tarefa');
  let getCriarTarefa = document.querySelector('#criar-tarefa');
  let getListaTarefa = document.querySelector('#lista-tarefas');

  getCriarTarefa.addEventListener('click', () => {
   if (getTextoTarefa.value.length > 0) {
    let novaLista = document.createElement('li');
    novaLista.innerText = getTextoTarefa.value;

    getListaTarefa.appendChild(novaLista);
    getTextoTarefa.value = '';
    }
  });
}
newList();
