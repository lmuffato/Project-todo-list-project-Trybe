// Requisito 2
const paragraph = document.getElementById('funcionamento');
paragraph.innerText = 'Clique duas vezes em um item para marcá-lo como completo';

// Requisito 5
const taskList = document.getElementById('lista-tarefas');
const buttonInsertItem = document.getElementById('criar-tarefa');
buttonInsertItem.innerText = 'Inserir';
const inputList = document.getElementById('texto-tarefa');

buttonInsertItem.addEventListener('click', () => {
  const listItem = document.createElement('li');
  listItem.innerText = inputList.value;
  taskList.appendChild(listItem);
});
