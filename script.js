const button = document.querySelector('#criar-tarefa');


button.addEventListener('click', () => {
  const addInput = document.querySelector('#texto-tarefa');
  const olItem = document.querySelector('#lista-tarefas');
  const liItem = document.createElement('li');
  liItem.innerText = addInput.value;
  olItem.appendChild(liItem);
  addInput.value = '';
});
