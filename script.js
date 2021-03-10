const btnAdicionar = document.getElementById('criar-tarefa');
const inputTarefa = document.getElementById('texto-tarefa');
const toDoList = document.getElementById('lista-tarefas');

btnAdicionar.addEventListener('click', () => {
  const text = inputTarefa.value;
  const tarefa = document.createElement('li');
  tarefa.innerText = text;
  toDoList.appendChild(tarefa);
  inputTarefa.value = '';
});
