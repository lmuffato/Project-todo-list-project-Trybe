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

function selectList(e) {
  for (let i = 0; i < list.children.length; i += 1) {
    if (list.children[i] !== e.target) {
      list.children[i].style.backgroundColor = 'white';
    }
  }
  e.target.style.backgroundColor = 'rgb(128, 128, 128)';
}

function completedTask(e) {
  const targetTask = e.target;
  if (targetTask.className !== 'completed') {
    targetTask.className = 'completed';
  } else {
    targetTask.className = 'no-completed';
  }
}

creatTaskButton.addEventListener('click', creatList);
list.addEventListener('click', selectList);
list.addEventListener('dblclick', completedTask);
