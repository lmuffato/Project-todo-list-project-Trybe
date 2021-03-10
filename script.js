function createTask() {
  const selectInput = document.querySelector('#texto-tarefa');
  const list = document.createElement('li');
  const tasks = document.querySelector('#lista-tarefas');
  list.innerText = selectInput.value;
  tasks.appendChild(list);
  selectInput.value = '';
}

const task = document.querySelector('#criar-tarefa');
task.addEventListener('click', createTask);

function addSelect(evt) {
  const select = document.querySelector('.selected');
  if (select) {
    select.classList.remove('selected');
    evt.target.classList.add('selected');
  } else {
    evt.target.classList.add('selected');
  }
}
const addBackground = document.getElementById('lista-tarefas');
addBackground.addEventListener('click', addSelect);

// EXERCICIO RESOLVIDO BASEADO EM EXERCICIO COURSE
