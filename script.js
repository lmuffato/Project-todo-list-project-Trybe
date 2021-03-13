const creatTaskButton = document.querySelector('#criar-tarefa');
const task = document.querySelector('#texto-tarefa');
const taskList = document.querySelector('#lista-tarefas');
const itens = document.getElementsByClassName('list-item');
const clearAllButton = document.getElementById('apaga-tudo');
const clearCompletedButton = document.getElementById('remover-finalizados');

function creatTask() {
  const list = document.createElement('li');
  list.innerText = task.value;
  task.value = '';
  list.className = 'list-item';
  taskList.appendChild(list);
}
creatTaskButton.addEventListener('click', creatTask);

// função realizada com a ajuda do Mauricio Viegas!
function addBackgroundColor() {
  taskList.addEventListener('click', (event) => {
    const backgroundColor = event.target;
    for (let index = 0; index < itens.length; index += 1) {
      if (itens[index].className.includes('selected')) {
        itens[index].classList.remove('selected');
      }
    }
    backgroundColor.classList.add('selected');
  });
}
addBackgroundColor();

function taskCompleted() {
  taskList.addEventListener('dblclick', (event) => {
    const completTask = event.target;
    if (completTask.className.includes('completed')) {
      completTask.classList.remove('completed');
      completTask.classList.remove('selected');
    } else {
      completTask.classList.remove('selected');
      completTask.classList.add('completed');
    }
  });
}
taskCompleted();

function clearAll() {
  taskList.innerHTML = '';
}
clearAllButton.addEventListener('click', clearAll);

function clearTaskCompleted() {
  for (let index = 0; index < itens.length; index += 1) {
    if (itens[index].className.includes('completed')) {
      taskList.removeChild(itens[index]);
    }
  }
}
clearCompletedButton.addEventListener('click', clearTaskCompleted);
