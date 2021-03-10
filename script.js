const botaoCriaTarefa = document.querySelector('#criar-tarefa');
const inputTexto = document.querySelector('#texto-tarefa');
const listaDeTarefas = document.querySelector('#lista-tarefas');

botaoCriaTarefa.addEventListener('click', criaTarefa);

function criaTarefa() {
  if (inputTexto.value !== '') {
    const lista = document.createElement('li');
    lista.innerText = inputTexto.value;
    inputTexto.value = '';
    listaDeTarefas.appendChild(lista);
  }
}

listaDeTarefas.addEventListener('click', trocaCor);

function trocaCor(event) {
  event.target.style.backgroundColor = 'rgb(128, 128, 128)';
  console.log(event);
}
