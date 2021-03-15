const buttonNewToDo = document.querySelector('#criar-tarefa');
const buttonCleanAll = document.querySelector('#apaga-tudo');
const buttonRemoveFinished = document.querySelector('#remover-finalizados');
const input = document.querySelector('#texto-tarefa');
const orderedList = document.querySelectorAll('ol');


function createLis() {
  var newLi = document.createElement('li');
  var newToDo = document.createTextNode(orderedList, input);
  newLi.appendChild(newToDo);
  document.getElementById('lista-tarefas').appendChild(newLi);
}

function textOnList (){
  var list = document.querySelectorAll('li');
  var textInInput = document.getElementById('texto-tarefa').nodeValue;
  for (let index = 0; index < list.length; index += 1) {
    list[index].innerText = textInInput;
  }
}

buttonNewToDo.addEventListener('click',createLis,textOnList);
