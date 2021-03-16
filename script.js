function submitTask() {
  const taskList = document.getElementById('lista-tarefas');// Recupera o elemento ordened list
  const newTask = document.createElement('li');// Cria um list item
  const index = parseInt(localStorage.getItem('index'));// Um índice salvo no localStorage para ser usado na chave dos list itens

  localStorage.setItem('task' + index, document.formTasks.task.value);// Salva no localStorage a nova tarefa 
  newTask.innerText = localStorage.getItem('task' + index);
  taskList.appendChild(newTask);
  localStorage.setItem('index', index + 1);// Incrementa o index no localStorage
}

function addButtomListener() {
    const button = document.getElementById('criar-tarefa');
    button.addEventListener('click', submitTask);
  }

function pullTasks() {
  const index = parseInt(localStorage.getItem('index'));

    for (i = 1; i < index; i += 1) {
      const taskList = document.getElementById('lista-tarefas');
      const newTask = document.createElement('li');
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
