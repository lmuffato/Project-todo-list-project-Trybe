// BOTÃO DE CRIAR
const btnCreateTask = document.getElementById('criar-tarefa');
const oListTask = document.getElementById('lista-tarefas');
btnCreateTask.addEventListener('click', () => {
  const listTaskElement = document.createElement('li');
  const inputTextTask = document.getElementById('texto-tarefa');
  listTaskElement.innerText = inputTextTask.value;
  oListTask.appendChild(listTaskElement);
  inputTextTask.value = '';
});
