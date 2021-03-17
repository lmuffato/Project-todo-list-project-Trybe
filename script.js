function selectItem(eventOrigin) {
  const selected = document.querySelector('.list-item');
  const listItem = eventOrigin.target;

  if (selected != null) {
    selected.classList.remove('list-item');// Remove a classe list-item caso exista em algum elemento
  }
  listItem.classList.add('list-item');// Adiciona a classe list-item ao elemento clicado
}

function throughItem(eventOrigin) {
  const elementClasses = eventOrigin.target.classList.value;// Recupera uma string com o nome das classes do elemeto
  const listItem = eventOrigin.target;
  if (elementClasses.indexOf('completed') > -1) {// Verifica se o elemento clicado possui a classe 'completed'
    listItem.classList.remove('completed');
  } else {
    listItem.classList.add('completed');
  }
}

function submitTask() {
  const taskList = document.getElementById('lista-tarefas');
  const newTask = document.createElement('li');
  const taskText = document.formTasks.task.value;
  newTask.addEventListener('click', selectItem);
  newTask.addEventListener('dblclick', throughItem);
  newTask.innerText = taskText;
  taskList.appendChild(newTask);
  document.formTasks.task.value = '';
  // const index = parseInt(localStorage.getItem('index'), 10);
  // localStorage.setItem('task' + index, document.formTasks.task.value);// Salva no localStorage a nova tarefa 
  // localStorage.setItem('index', index + 1);// Incrementa o index no localStorage
}

function clearTasks() {
  const taskList = document.getElementById('lista-tarefas');
  taskList.innerHTML = '';
}

function addButtomListener() {
  const button1 = document.getElementById('criar-tarefa');
  const button2 = document.getElementById('apaga-tudo');
  button1.addEventListener('click', submitTask);
  button2.addEventListener('click', clearTasks);
}

// function pullTasks() {
//   const index = parseInt(localStorage.getItem('index'), 10);

//   for (let i = 1; i < index; i += 1) {
//     const taskList = document.getElementById('lista-tarefas');
//     const newTask = document.createElement('li');
//     newTask.innerText = localStorage.getItem('task' + i);
//     taskList.appendChild(newTask);
//   }
// }

// function firstTime() {
//   if (localStorage.getItem('index') == null) {
//     localStorage.setItem('index', 1);
//   } else {
//     pullTasks();
//   }
// }

addButtomListener();
