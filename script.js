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
  renderNewTask(listItem);
  clearInput(task);
  task.focus();
}

function deleteList() {
  const list = document.getElementById('lista-tarefas');
  list.innerHTML = '';
}

function removeCompletedTasks() {
  const list = document.querySelectorAll('.completed');
  list.forEach((task) => task.remove());
}

function saveList() {
  const tasks = document.querySelectorAll('.list-item');
  const tasksArray = [];
  tasks.forEach(((task) => tasksArray.push(task.outerHTML)));
  localStorage.setItem('tasks', tasksArray);
}

function loadSavedTasks() {
  const list = document.getElementById('lista-tarefas');
  const tasks = localStorage.getItem('tasks').split(',');
  console.log(tasks);

  tasks.forEach((task) => {
    list.innerHTML += task;
  });
}

window.onload = () => {
  loadSavedTasks();

  // Adicina eventos de cliques nos botões
  document.getElementById('criar-tarefa').addEventListener('click', addNewTask);

  document.getElementById('apaga-tudo').addEventListener('click', deleteList);

  document.getElementById('remover-finalizados').addEventListener('click', removeCompletedTasks);

  document.getElementById('salvar-tarefas').addEventListener('click', saveList);

  // Adicina eventos de cliques nas tarefas
  const listItem = document.querySelectorAll('li');
  listItem.forEach((item) => {
    item.addEventListener('click', selectTask);
    item.addEventListener('dblclick', completeTask);
  });
};
