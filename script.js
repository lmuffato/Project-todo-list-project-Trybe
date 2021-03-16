function submitTask() {
  const index = parseInt(localStorage.getItem('index', 10));
  localStorage.setItem('task' + index, document.formTasks.task.value);// Salva no localStorage a nova tarefa 
  localStorage.setItem('index', index + 1);// Incrementa o index no localStorage
}

function addButtomListener() {
  const button = document.getElementById('criar-tarefa');
  button.addEventListener('click', submitTask);
}

function selectItem(eventOrigin) {
  const selected = document.querySelector('.list-item');
  
  if (selected != null) {
    selected.classList.remove('list-item');
  }
  listItem = eventOrigin.target;
  listItem.className = 'list-item';
}

function pullTasks() {
  const index = parseInt(localStorage.getItem('index', 10));

  for (let i = 1; i < index; i += 1) {
    const taskList = document.getElementById('lista-tarefas');
    const newTask = document.createElement('li');
    newTask.addEventListener('click', selectItem);
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
