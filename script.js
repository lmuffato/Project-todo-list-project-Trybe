const createTaskButton = document.getElementById('criar-tarefa');
const addTaskInput = document.getElementById('texto-tarefa');
const tasksList = document.getElementById('lista-tarefas');
const allTasks = document.getElementsByClassName('all-tasks');

function createTask() {
  if (addTaskInput.value !== '') {
    const newTask = document.createElement('li');
    newTask.classList.add('all-tasks');
    newTask.textContent = addTaskInput.value;
    tasksList.appendChild(newTask);
    addTaskInput.value = '';
  }
}

createTaskButton.addEventListener('click', createTask);

function selectedTask() {
  for (let index = 0; index < allTasks.length; index += 1) {
    allTasks[index].addEventListener('click', (event) => {
      const selected = event.target;
      selected.className += ' selected';
    });
  }
}

selectedTask();

function completedTask(event) {
  event.target.classList.toggle('completed');
}

tasksList.addEventListener('dblclick', completedTask);

function clearAll() {
  const clearAllButton = document.getElementById('apaga-tudo');
  clearAllButton.addEventListener('click', () => {
    const listItens = document.querySelectorAll('li');
    for (let index = 0; index < listItens.length; index += 1) {
      listItens[index].remove();
    }
  });
}

clearAll();
