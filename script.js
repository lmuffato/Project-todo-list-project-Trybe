const taskList = document.querySelector('#lista-tarefas');

function createListItem() {
  const listItem = document.createElement('li');
  return listItem;
}

function inputText() {
  const text = document.querySelector('#texto-tarefa').value;
  return text;
}

function addTask() {
  const taskList = document.querySelector('#lista-tarefas');
  const createTask = document.querySelector('#criar-tarefa');

  createTask.addEventListener('click', () => {
    const text = inputText();
    const listItem = createListItem();
    listItem.innerHTML = text;
    taskList.appendChild(listItem);
    document.querySelector('#texto-tarefa').value = '';
  });
}

addTask();

function colorNone() {
  const list = document.querySelectorAll('li');
  for (let index = 0; index < list.length; index += 1) {
    list[index].style.backgroundColor = 'white';
  }
  return list;
}

function changeBackgroundColor() {
  const list = document.querySelectorAll('#lista-tarefas');
  for (let index = 0; index < list.length; index += 1) {
    list[index].addEventListener('click', (event) => {
      list[index] = colorNone();
      event.target.style.backgroundColor = 'rgb(128, 128, 128)';
    });
  }
}

changeBackgroundColor();

function completedTask() {
  const list = document.querySelectorAll('#lista-tarefas');
  for (let index = 0; index < list.length; index += 1) {
    list[index].addEventListener('dblclick', (event) => {
      event.target.classList.toggle('completed');
    });
  }
}

completedTask();

function btnEraseAll() {
  const list = document.querySelector('#lista-tarefas');
  const eraseAll = document.querySelector('#apaga-tudo');

  eraseAll.addEventListener('click', () => {
    list.innerHTML = '';
  });
}

btnEraseAll();

function removeCompleted() {
  const remove = document.querySelector('#remover-finalizados');
  remove.addEventListener('click', () => {
    const completed = document.querySelectorAll('.completed');
    console.log('cricou danado!');
    for (let index = 0; index < completed.length; index += 1) {
      if (completed[index].className === 'completed') {
        taskList.removeChild(completed[index]);
      }
    }
  });
}

removeCompleted();
