const submitItem = document.getElementById('criar-tarefa');
const inputItem = document.getElementById('texto-tarefa');
const outputOl = document.querySelector('#lista-tarefas');

submitItem.addEventListener('click', () => {
  const createLi = document.createElement('li');
  createLi.innerText = inputItem.value;
  outputOl.appendChild(createLi);
  inputItem.value = '';
});
