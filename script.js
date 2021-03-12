// Requisito 5 e 6 - Clicando no Botão e adicionando uma nova lista ordenada
function newList() {
  const getTextoTarefa = document.querySelector('#texto-tarefa');
  const getCriarTarefa = document.querySelector('#criar-tarefa');
  const getListaTarefa = document.querySelector('#lista-tarefas');

  getCriarTarefa.addEventListener('click', () => {
    if (getTextoTarefa.value.length > 0) {
      const novaLista = document.createElement('li');
      novaLista.className = 'item';
      novaLista.innerText = getTextoTarefa.value;

      getListaTarefa.appendChild(novaLista);
      getTextoTarefa.value = '';
    }
  });
}
newList();

function changingBackground() {
  let getListasTarefas = document.querySelector('#listas-tarefas');
  let getClassItem = document.querySelectorAll('.item');
  let backgroundColor = 'rgb(255, 255, 255)';
  let setColor = 'rgb(128, 128, 128)';

  getListasTarefas.addEventListener('click', () => {
    for (let index = 0; index < getClassItem.length; index += 1) {
        if (getClassItem[index].style.backgroundColor === setColor) {
            getClassItem[index].style.backgroundColor = backgroundColor;
        } else {
            getClassItem[index].style.backgroundColor = setColor;
        }
    }
  });
}
changingBackground();