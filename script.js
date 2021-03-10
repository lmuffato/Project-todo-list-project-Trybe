function createTask() {
  const createTaskButton = document.getElementById('criar-tarefa');
  createTaskButton.onclick = () => {
    const taskList = document.getElementById('lista-tarefas');
    const taskInputName = document.getElementById('texto-tarefa');

    const taskItem = document.createElement('li');
    taskItem.innerHTML = taskInputName.value;

    taskInputName.value = '';
    taskList.appendChild(taskItem);
  };
}

createTask();
