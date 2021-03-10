function selectTask(item) {
  const taskItem = item;
  taskItem.style.backgroundColor = 'rgb(128,128,128)';
}

function createTask() {
  const createTaskButton = document.getElementById('criar-tarefa');
  createTaskButton.onclick = () => {
    const taskList = document.getElementById('lista-tarefas');
    const taskInputName = document.getElementById('texto-tarefa');

    const taskItem = document.createElement('li');
    taskItem.innerHTML = taskInputName.value;
    taskItem.onclick = () => selectTask(taskItem);

    taskInputName.value = '';
    taskList.appendChild(taskItem);
  };
}

createTask();
