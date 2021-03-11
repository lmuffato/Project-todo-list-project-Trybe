const text = document.getElementById('texto-tarefa');
const getClick = document.getElementById('criar-tarefa');
const list = document.getElementById('lista-tarefas');
getClick.addEventListener('click', addText);

function addText () {
const createItem = document.createElement('li');
createItem.innerText = text.value;
text.value = '';
list.appendChild(createItem);
}
