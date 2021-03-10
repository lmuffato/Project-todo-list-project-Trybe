const textTask = document.createElement('INPUT');
textTask.id = 'texto-tarefa';
const taskContainer = document.querySelector('.taskContainer');
taskContainer.appendChild(textTask);
const listContainer = document.querySelector('.listContainer');
const list = document.createElement('ol');
list.id = 'lista-tarefas';
listContainer.appendChild(list);
