function clearInputField() {
  const clearContent = document.getElementById('texto-tarefa');
  clearContent.value = '';
}

function insertToDo() {
  const list = document.getElementById('lista-tarefas');
  const content = document.getElementById('texto-tarefa').value;
  const node = document.createElement('li');
  if (content != null) {
    node.innerHTML = content;
    list.appendChild(node);
  }
  clearInputField();
}
