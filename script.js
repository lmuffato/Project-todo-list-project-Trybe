const maker = document.querySelector('#criar-tarefa');
maker.addEventListener('click', function newTask() {
  const task = document.querySelector('#texto-tarefa');
  const theTask = document.createElement('li');
  const theList = document.querySelector('#lista-tarefas');
  theTask.innerHTML = task.value;
  theTask.classList.add('task');
  theList.appendChild(theTask);
  task.value = '';
});

const theList = document.querySelector('#lista-tarefas');
theList.addEventListener('click', function mark(element) {
  const remove = document.querySelector('.bkGray');
  if (remove === null) {
    element.target.classList.add('bkGray');
  } else {
    remove.classList.remove('bkGray');
    element.target.classList.add('bkGray');
  }
});
