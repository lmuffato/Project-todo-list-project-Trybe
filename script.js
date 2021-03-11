const maker = document.querySelector('#criar-tarefa');
maker.addEventListener('click', () => { // function newTask
  const task = document.querySelector('#texto-tarefa');
  const theTask = document.createElement('li');
  const theList = document.querySelector('#lista-tarefas');
  theTask.innerHTML = task.value;
  theTask.classList.add('task');
  theList.appendChild(theTask);
  task.value = '';
});

const theList = document.querySelector('#lista-tarefas');
theList.addEventListener('click', (element) => { //  function mark
  const remove = document.querySelector('.bkGray');
  if (remove === null) {
    element.target.classList.add('bkGray');
  } else {
    remove.classList.remove('bkGray');
    element.target.classList.add('bkGray');
  }
});

theList.addEventListener('dblclick', (element) => { // function risc
  const elementRisc = element.target;
  const test = elementRisc.getAttribute('class');
  if (test.includes('completed')) {
    elementRisc.classList.remove('completed');
  } else {
    elementRisc.classList.add('completed');
  }
});
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/includes

const clear = document.querySelector('#apaga-tudo');
clear.addEventListener('click', () => { // function clearAll
  const task = document.querySelectorAll('.task');
  for (let index = 0; index < task.length; index += 1) {
    theList.removeChild(task[index]);
  }
});

const finishClear = document.querySelector('#remover-finalizados');
finishClear.addEventListener('click', () => { // function finishHim
  const him = document.querySelectorAll('.completed');
  for (let index = 0; index < him.length; index += 1) {
    theList.removeChild(him[index]);
  }
});

const save = document.querySelector('#salvar-tarefas');
save.addEventListener('click', () => { // function saveData
  localStorage.setItem('lis', theList.innerHTML);
});

window.onload = () => {
  const lis = localStorage.getItem('lis');
  theList.innerHTML = lis;
};
