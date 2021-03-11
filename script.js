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

theList.addEventListener('dblclick', function risc(element) {
  const elementRisc = element.target;
  const test = elementRisc.getAttribute('class');
  if (test.includes('completed')) {
    elementRisc.classList.remove('completed');
  } else {
    elementRisc.classList.add('completed');
  }
});
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/includes
