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
