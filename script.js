// Requisito 5 - Clicando no Botão e adicionando uma nova lista
function newList() {
  const getTextoTarefa = document.querySelector('#texto-tarefa');
  const getCriarTarefa = document.querySelector('#criar-tarefa');
  const getListaTarefa = document.querySelector('#lista-tarefas');

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
