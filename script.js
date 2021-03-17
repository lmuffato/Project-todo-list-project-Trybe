let buttonAddToDo = document.getElementById('criar-tarefa');
buttonAddToDo.addEventListener('click', receiveClick);
function receiveClick (event) {
  let listItem = document.createElement("li");
  let textElement = document.getElementById('texto-tarefa').value;

  document.getElementById('lista-tarefas').appendChild(listItem);
  listItem.appendChild(document.createTextNode(textElement));

  document.getElementById('texto-tarefa').value = '';
}
