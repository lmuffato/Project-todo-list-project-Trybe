const btnAdicionar = document.getElementById('criar-tarefa');
const inputTarefa = document.getElementById('texto-tarefa');
const toDoList = document.getElementById('lista-tarefas');
const btnLimparLista = document.getElementById('apaga-tudo');

btnAdicionar.addEventListener('click', () => {
  const text = inputTarefa.value;
  const tarefa = document.createElement('li');
  tarefa.innerText = text;
  toDoList.appendChild(tarefa);
  inputTarefa.value = '';
});

toDoList.addEventListener('dblclick', (event) => {
  const item = event.target;
  item.classList.toggle('completed');
});

toDoList.addEventListener('click', (event) => {
  const item = event.target;
  const listItems = document.querySelectorAll('#lista-tarefas li');
  for (let index = 0; index < listItems.length; index += 1) {
    listItems[index].classList.remove('grayBackground');
  }
  item.classList.add('grayBackground');
});

btnLimparLista.addEventListener('click', () => {
  toDoList.innerHTML = '';
});
