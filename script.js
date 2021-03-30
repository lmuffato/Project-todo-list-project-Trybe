function btnAddNewTask() {
  const newListItem = document.createElement('li');
  const list = document.getElementById('lista-tarefas');
  const taskText = document.getElementById('texto-tarefa');

  list.appendChild(newListItem).innerHTML = taskText.value;
  taskText.value = '';
}

const addNewTask = () => {
  const btnCreateTask = document.getElementById('criar-tarefa');
  btnCreateTask.addEventListener('click', btnAddNewTask);
};

addNewTask();
