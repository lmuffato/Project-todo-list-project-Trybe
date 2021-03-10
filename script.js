function selectTask(item) {
  const taskItem = item;
  const tasksList = document.getElementsByClassName('task');

  for (let index = 0; index < tasksList.length; index += 1) {
    tasksList[index].style.backgroundColor = '';
  }

  taskItem.style.backgroundColor = 'rgb(128,128,128)';
}

function toggleDoneTask(item) {
  const taskItem = item;

  taskItem.classList.toggle('completed');
}

function createTask() {
  const createTaskButton = document.getElementById('criar-tarefa');
  createTaskButton.onclick = () => {
    const taskList = document.getElementById('lista-tarefas');
    const taskInputName = document.getElementById('texto-tarefa');

    const taskItem = document.createElement('li');
    taskItem.innerHTML = taskInputName.value;
    taskItem.className = 'task';
    taskItem.onclick = () => selectTask(taskItem);
    taskItem.ondblclick = () => toggleDoneTask(taskItem);

    taskInputName.value = '';
    taskList.appendChild(taskItem);
  };
}

createTask();
