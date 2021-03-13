const creatTaskButton = document.querySelector('#criar-tarefa');
const task = document.querySelector('#texto-tarefa');
const taskList = document.querySelector('#lista-tarefas');

function creatTask() {
  const list = document.createElement('li');
  list.innerText = task.value;
  task.value = '';
  list.className = 'list-item'
  taskList.appendChild(list);
}
creatTaskButton.addEventListener('click', creatTask);

function addBackgroundColor() {
    const itens = document.getElementsByClassName('li');
    taskList.addEventListener('click', (event) => {
    const backgroundColor = event.target;
    for (index = 0; index < itens.length; index += 1) {
      if (itens[index].className === 'selected') {
        itens[index].classList.remove('selected');
      }
    }
    backgroundColor.classList.add('selected');
  });
}
addBackgroundColor()

