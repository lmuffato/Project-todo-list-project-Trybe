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

toDoList.addEventListener('click', (event) => {
  const item = event.target;
  console.log(item);
  item.style.backgroundColor = 'rgb(128, 128, 128)';
});
