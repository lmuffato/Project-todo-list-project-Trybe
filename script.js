//Requesito 5
let button = document.getElementById('criar-tarefa');
button.addEventListener('click', newItem);

function newItem () {
  let textTask = document.getElementById('texto-tarefa');
  let addList = document.getElementById('lista-tarefas').appendChild(document.createElement('li'));
  addList.innerHTML = textTask.value;
  textTask.value = ' ';
}

//Requesito 6
