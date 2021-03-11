
function getInput() {
  const textoTarefa = document.getElementById('texto-tarefa').value;
  return textoTarefa;
}

function getList() {
  const listaTarefa = document.getElementById('lista-tarefas');
  return listaTarefa;
}

function criarTarefa() {
  const textoTarefa = getInput();
  const tarefa = document.createElement('li');
  const listaTarefa = getList();
  tarefa.className = 'item';
  tarefa.innerText = textoTarefa;
  if (tarefa.innerText !== '') {
    listaTarefa.appendChild(tarefa);
    document.getElementById('texto-tarefa').value = '';
  } else {
    alert ('Digite uma tarefa para adicionar!');
  }
}

function changeBgColor(click){
  const event = click.target;
  const li = document.getElementsByClassName('item');
  const liSelected = document.getElementsByClassName('item-selected');
    for (let index = 0; index < li.length; index += 1) {
      if (typeof(liSelected[index]) != 'undefined'){
        liSelected[index].className = 'item';
        event.className = 'item-selected';
      } else {
        event.className = 'item-selected';
    }
  }
}

const clickList = document.querySelector('ol');
clickList.addEventListener('click', changeBgColor);

function loadPage() {

}

window.onload = loadPage();