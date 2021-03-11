const btnCriarTarefa = document.getElementById('criar-tarefa');
const listTasks = document.getElementById('lista-tarefas');
const inputValue = document.getElementById('texto-tarefa');
let taskItem = document.querySelectorAll('.task');

function selectedTask() {
  taskItem.forEach((task, index) => {
    task.addEventListener('click', () => {
      for (let i = 0; i < taskItem.length; i += 1) {
        taskItem[i].classList.remove('selected');
      }
      taskItem[index].className = 'task selected';
    });
  });
}

function createTask() {
  if (inputValue.value !== '') {
    const li = document.createElement('li');
    listTasks.appendChild(li);
    li.className = 'task';
    li.innerHTML = inputValue.value;
    inputValue.value = '';
    taskItem = document.querySelectorAll('.task');
  }
  selectedTask();
}

btnCriarTarefa.addEventListener('click', createTask);
