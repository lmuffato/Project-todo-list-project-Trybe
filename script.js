const inputTask = document.getElementById('texto-tarefa');
const olTasks = document.getElementById('lista-tarefas');
const buttonCreateTasks = document.getElementById('criar-tarefa');

const createTasks = () => {
  const task = document.createElement('li');
  olTasks.appendChild(task);
  task.innerText = inputTask.value;
  inputTask.value = '';
  task.addEventListener('click', () => {
    const list = document.querySelectorAll('li');
    for (let indexList = 0; indexList < list.length; indexList += 1) {
      const styleList = list[indexList].style.backgroundColor;
      if (styleList === 'rgb(128, 128, 128)') {
        list[indexList].style.backgroundColor = '';
      }
    }
    task.style.backgroundColor = 'rgb(128, 128, 128)'
  });
}

buttonCreateTasks.addEventListener('click', createTasks);
