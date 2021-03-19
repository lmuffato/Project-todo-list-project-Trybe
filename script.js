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
}

function clearTasks() {
  const taskList = document.getElementById('lista-tarefas');
  taskList.innerHTML = '';
}

function removeFinnished() {
  let taskList = document.getElementById('lista-tarefas');
  let completedTasks = document.getElementsByClassName('completed');

  if (completedTasks.length > 0) {
    for (let i = 0; i , completedTasks.length; i += 1) {
      taskList.removeChild(completedTasks[0]);
    }
  }
}

function pushTasks() {
  const listItems = document.getElementsByTagName('li');
  let item = {};
  let itemPropeties = [];
  
  for (let i = 0; i < listItems.length; i +=1) {
    item = {
      text: listItems[i].innerText,
      classes: listItems[i].classList.value
    }
    itemPropeties.push(item);
  }
  localStorage.setItem('savedItems', JSON.stringify(itemPropeties));
}

function moveUp() {
  const selected = document.querySelector('.list-item');
  if (selected != null) {
    const previous = selected.previousElementSibling;

    if (previous != null) {
      const taskList = document.getElementById('lista-tarefas');
      const task = document.createElement('li');
      task.innerText = selected.innerText;
      task.classList.value = selected.classList.value;
      task.addEventListener('click', selectItem);
      task.addEventListener('dblclick', throughItem);
      taskList.replaceChild(task, previous);
      taskList.replaceChild(previous, selected);
    }
  }
}

function moveDown() {
  const selected = document.querySelector('.list-item');
  if (selected != null) {
    const next = selected.nextElementSibling;
  
    if (next != null) {
      const taskList = document.getElementById('lista-tarefas');
      const task = document.createElement('li');
      task.innerText = selected.innerText;
      task.classList.value = selected.classList.value;
      task.addEventListener('click', selectItem);
      task.addEventListener('dblclick', throughItem);
      taskList.replaceChild(task, next);
      taskList.replaceChild(next, selected);
    }
  }
}

function addButtomListener() {
  const button1 = document.getElementById('criar-tarefa');
  const button2 = document.getElementById('apaga-tudo');
  const button3 = document.getElementById('remover-finalizados');
  const button4 = document.getElementById('salvar-tarefas');
  const button5 = document.getElementById('mover-cima');
  const button6 = document.getElementById('mover-baixo');
  button1.addEventListener('click', submitTask);
  button2.addEventListener('click', clearTasks);
  button3.addEventListener('click', removeFinnished);
  button4.addEventListener('click', pushTasks);
  button5.addEventListener('click', moveUp);
  button6.addEventListener('click', moveDown);
}

function pullTasks() {
  const saved = localStorage.getItem('savedItems');
  if (saved != null) {
    const itemProperties = JSON.parse(saved);
    const taskList = document.getElementById('lista-tarefas');
    let newItem;

    for (let i = 0; i < itemProperties.length; i += 1) {
      newItem = document.createElement('li');
      newItem.innerText = itemProperties[i].text;
      newItem.classList.value = itemProperties[i].classes;
      newItem.addEventListener('click', selectItem);
      newItem.addEventListener('dblclick', throughItem);
      taskList.appendChild(newItem);
    }
  }
}

// Arrows ↑ ⬆ ↓ ⬇
pullTasks();
addButtomListener();
