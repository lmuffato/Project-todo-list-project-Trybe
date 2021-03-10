function createListItem() {
  const listItem = document.createElement('li');
  listItem.className = 'list-item';
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

function changeBackgroundColor() {
  const list = document.querySelectorAll('#lista-tarefas');
  for (let index = 0; index < list.length; index += 1) {
    list[index].addEventListener('click', (event) => {
      event.target.style.backgroundColor = 'rgb(128, 128, 128)';
    });
  }
}

changeBackgroundColor();
