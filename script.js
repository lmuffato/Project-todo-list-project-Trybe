const inputTask = document.getElementById('texto-tarefa');
const olTasks = document.getElementById('lista-tarefas');
const buttonCreateTasks = document.getElementById('criar-tarefa');

const createTasks = () => {
  const task = document.createElement('li');
  olTasks.appendChild(task);
  task.innerText = inputTask.value;
  inputTask.value = '';
}

function deselect() {
  const selected = document.querySelector('.color-gray');
  selected.classList.remove('color-gray');
}

buttonCreateTasks.addEventListener('click', createTasks);

function select() {
  const list = document.getElementsByTagName('li');
  for (let indexGray = 0; indexGray < list.length; indexGray += 1) {
    list[indexGray].addEventListener('click', () => {
      deselect();
      list[indexGray].classList.add('color-gray');
    });
  }
}

select();
