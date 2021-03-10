const toDoList = [];

function renderNewTask(task) {
  const list = document.getElementById('lista-tarefas');
  list.appendChild(task);
}

function clearInput(input) {
  const text = input;
  text.value = '';
}

function selectListItem(Event) {
  const currentItemSelected = document.querySelector('li.selected');
  const item = Event.target;

  const hasSelectedItem = currentItemSelected !== null;

  if (item.classList !== 'selected') {
    if (hasSelectedItem) {
      currentItemSelected.classList.remove('selected');
    }
    item.classList.add('selected');
  }
}

function addNewTask() {
  const task = document.getElementById('texto-tarefa');
  const listItem = document.createElement('li');

  listItem.innerText = task.value;
  listItem.className = 'list-item';
  listItem.addEventListener('click', selectListItem);
  toDoList.push(task.value);
  renderNewTask(listItem);
  clearInput(task);
}

document.getElementById('criar-tarefa').addEventListener('click', addNewTask);
