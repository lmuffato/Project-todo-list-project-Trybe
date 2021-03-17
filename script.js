function submitTask() {
  const index = parseInt(localStorage.getItem('index'), 10);
  localStorage.setItem('task' + index, document.formTasks.task.value);// Salva no localStorage a nova tarefa 
  localStorage.setItem('index', index + 1);// Incrementa o index no localStorage
}

function addButtomListener() {
  const button = document.getElementById('criar-tarefa');
  button.addEventListener('click', submitTask);
}

function selectItem(eventOrigin) {
  const selected = document.querySelector('.list-item');
  const listItem = eventOrigin.target;

  if (selected != null) {
    selected.classList.remove('list-item');
  }
  listItem = eventOrigin.target;
  listItem.classList.add('list-item');
}

function throughItem(eventOrigin) {
  const elementClasses = eventOrigin.target.classList.value;// Recupera uma string com o nome das classes do elemeto
  const listItem = eventOrigin.target;

  if (elementClasses.indexOf('completed') > -1) {// Verifica se o elemento clicado possui a classe 'completed'
    listItem.classList.remove('completed');
  } else {
    listItem = eventOrigin.target;
    listItem.classList.add('completed');
  }
}

function pullTasks() {
  const index = parseInt(localStorage.getItem('index'), 10);

  for (let i = 1; i < index; i += 1) {
    const taskList = document.getElementById('lista-tarefas');
    const newTask = document.createElement('li');
    newTask.addEventListener('click', selectItem);
    newTask.addEventListener('dblclick', throughItem);
    newTask.innerText = localStorage.getItem('task' + i);
    taskList.appendChild(newTask);
  }
}

function firstTime() {
  if (localStorage.getItem('index') == null) {
    localStorage.setItem('index', 1);
  } else {
    pullTasks();
  }
}

firstTime();
addButtomListener();
