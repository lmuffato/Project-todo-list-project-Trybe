const buttonNewToDo = document.querySelector('#criar-tarefa');
const buttonCleanAll = document.querySelector('#apaga-tudo');
const buttonRemoveFinished = document.querySelector('#remover-finalizados');
const input = document.querySelector('#texto-tarefa');
const orderedList = document.querySelectorAll('ol');


function createNewTodo() {
  var newLi = document.createElement('li');
  newLi.innerText = input.value;
  document.getElementById('lista-tarefas').appendChild(newLi);
  input.value = '';
}

buttonNewToDo.addEventListener('click',createNewTodo);
