const btnCriarTarefa = document.getElementById('criar-tarefa');
const listTasks = document.getElementById('lista-tarefas');
const inputValue = document.getElementById('texto-tarefa');
let taskItem = document.querySelectorAll('.task');

function selectedTask() {
  taskItem.forEach((task, index) => {
    task.addEventListener('click', () => {
      for (let i = 0; i < taskItem.length; i += 1) {
        taskItem[i].classList.remove('selected');
        taskItem[i].style.backgroundColor = null;
      }
      taskItem[index].classList.add('selected');
      const taskSelected = document.getElementsByClassName('selected');
      taskSelected[0].style.backgroundColor = 'rgb(128 , 128 , 128)';
    });
  });
}

function dblClickTask() {
  listTasks.addEventListener('dblclick', (e) => {
    const task = e.target;
    task.classList.toggle('completed');
    if (task.classList.contains('completed')) {
      task.style.textDecoration = 'line-through solid rgb(0, 0, 0)';
    } else {
      task.style.textDecoration = null;
    }
  });
}

function clearList() {
  const btnClearList = document.getElementById('apaga-tudo');
  btnClearList.addEventListener('click', () => {
    for (let i = 0; i < taskItem.length; i += 1) {
      listTasks.removeChild(listTasks.firstChild);
    }
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
  dblClickTask();
}
clearList();

btnCriarTarefa.addEventListener('click', createTask);
