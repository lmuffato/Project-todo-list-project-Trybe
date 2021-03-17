function changesColor(event) {
  const { target } = event;
  target.style.backgroundColor = 'rgb(128,128,128)';
  console.log(event.target);
}

function receiveClick() {
  const listItem = document.createElement('li');
  const textElement = document.getElementById('texto-tarefa').value;

  listItem.addEventListener('click', changesColor);

  document.getElementById('lista-tarefas').appendChild(listItem);
  listItem.appendChild(document.createTextNode(textElement));

  document.getElementById('texto-tarefa').value = '';
}

const buttonAddToDo = document.getElementById('criar-tarefa');
buttonAddToDo.addEventListener('click', receiveClick);
