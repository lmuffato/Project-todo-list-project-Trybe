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
