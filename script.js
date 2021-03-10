const toDoList = [];

function renderNewTask(task) {
  const list = document.getElementById('lista-tarefas');
  list.appendChild(task);
}

function clearInput(input) {
  const text = input;
  text.value = '';
}

function selectTask(Event) {
  const currentItemSelected = document.querySelector('li.selected');
  const task = Event.target;

  const hasSelectedItem = currentItemSelected !== null;

  if (task.classList !== 'selected') {
    if (hasSelectedItem) {
      currentItemSelected.classList.remove('selected');
    }
    task.classList.add('selected');
  }
}

function completeTask(Event) {
  const task = Event.target;
  const isCompleted = task.className.includes('completed');

  if (isCompleted) {
    task.classList.remove('completed');
  } else {
    task.classList.add('completed');
  }
}

function addNewTask() {
  const task = document.getElementById('texto-tarefa');
  const listItem = document.createElement('li');

  listItem.innerText = task.value;
  listItem.className = 'list-item';
  listItem.addEventListener('click', selectTask);
  listItem.addEventListener('dblclick', completeTask);
  toDoList.push(task.value);
  renderNewTask(listItem);
  clearInput(task);
}

function deleteList() {
  const list = document.getElementById('lista-tarefas');

  list.innerHTML = '';

  // for (task of list.children) {
  //   list.remove(task);
  // }
}

function removeCompletedTasks() {
  const completedTasks = document.getElementsByClassName('completed');
  const list = document.getElementById('lista-tarefas');

  for (task in completedTasks) {
    list.removeChild(completedTasks[task]);
  }
}

window.onload = () => {
  document.getElementById('criar-tarefa').addEventListener('click', addNewTask);
  document.getElementById('apaga-tudo').addEventListener('click', deleteList);
  document.getElementById('remover-finalizados').addEventListener('click', removeCompletedTasks);
};
