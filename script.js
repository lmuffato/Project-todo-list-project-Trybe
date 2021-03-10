const taskList = document.getElementById('lista-tarefas');

document.getElementById('criar-tarefa').addEventListener('click', () => {
  const inputText = document.getElementById('texto-tarefa');
  const listItem = document.createElement('li');
  listItem.innerText = inputText.value;
  taskList.appendChild(listItem);
  inputText.value = '';
});
