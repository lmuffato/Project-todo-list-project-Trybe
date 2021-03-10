const textTask = document.createElement('INPUT');
textTask.id = 'texto-tarefa';
const taskContainer = document.querySelector('.taskContainer');
taskContainer.appendChild(textTask);
const listContainer = document.querySelector('.listContainer');
const list = document.createElement('ol');
list.id = 'lista-tarefas';
listContainer.appendChild(list);
const buttonTask = document.createElement('button');
buttonTask.id = 'criar-tarefa';
taskContainer.appendChild(buttonTask);
buttonTask.innerText = 'Adicionar';
function addTask() {
  const listItem = document.createElement('li');
  listItem.innerText = textTask.value;
  list.appendChild(listItem);
  textTask.value = '';
}
buttonTask.addEventListener('click', addTask);
list.addEventListener('click', function(event) {
    let listItens = document.querySelectorAll('li');
    for (let item of listItens) {
        if (item.style.backgroundColor = 'rgb(128, 128, 128)') {
            item.style.backgroundColor = 'white';
            event.target.style.backgroundColor = 'rgb(128, 128, 128)'
        }
        else {event.target.style.backgroundColor = 'rgb(128, 128, 128)'}
    }
});

