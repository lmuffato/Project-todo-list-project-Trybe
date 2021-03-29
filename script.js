const list = document.querySelector('#lista-tarefas');
const creatTaskButton = document.querySelector('#criar-tarefa');

function creatList() {
  const input = document.querySelector('#texto-tarefa');
  const inputTask = input.value;
  if (inputTask !== '') {
    const newList = document.createElement('li');
    newList.innerHTML = inputTask;
    list.appendChild(newList);
    input.value = '';
  }
}

creatTaskButton.addEventListener('click', creatList);
