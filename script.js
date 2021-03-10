function setTask() {
  const tagLi = document.createElement('li');
  tagLi.className = 'list-item';
  tagLi.innerText = document.getElementById('texto-tarefa').value;
  document.getElementById('lista-tarefas').appendChild(tagLi);
  document.getElementById('texto-tarefa').value = '';
}

document.getElementById('criar-tarefa').addEventListener('click', setTask);

function clickColor(event) {
  event.target.style.backgroundColor = 'rgb(128, 128, 128)';
}

function unsetColor() {
  const items = document.getElementsByClassName('list-item');
  for (let index = 0; index < items.length; index += 1) {
    if (items[index].style.backgroundColor === 'rgb(128, 128, 128)') {
      items[index].style.backgroundColor = 'white';
    }
  }
}

document.getElementById('lista-tarefas').addEventListener('click', unsetColor);
document.getElementById('lista-tarefas').addEventListener('click', clickColor);

function completeTask(event) {
  if (event.target.className === 'list-item') {
    event.target.className = 'list-item completed';
  } else {
    event.target.className = 'list-item';
  }
}

document.getElementById('lista-tarefas').addEventListener('dblclick', completeTask);

function clearList() {
  const taskList = document.getElementById('lista-tarefas');
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
}

document.getElementById('apaga-tudo').addEventListener('click', clearList);

function clearDoneItems() {
  const allItems = document.getElementById('lista-tarefas').childNodes;
  for (let index = allItems.length - 1; index >= 0; index -= 1) {
    if (allItems[index].className === 'list-item completed') {
      document.getElementById('lista-tarefas').removeChild(allItems[index]);
    }
  }
}

document.getElementById('remover-finalizados').addEventListener('click', clearDoneItems);

function saveItems() {
  localStorage.setItem('listLength', document.getElementsByClassName('list-item').length)
  for (let index = 0; index < document.getElementsByClassName('list-item').length; index += 1) {
    localStorage.setItem(`item${index}`, document.getElementsByClassName('list-item')[index].innerText);
  }
}

document.getElementById('salvar-tarefas').addEventListener('click', saveItems);

function saveCompletedItems() {
  for (let index = 0; index < document.getElementsByClassName('list-item').length; index += 1) {
    localStorage.setItem(`item${index} className`, document.getElementsByClassName('list-item')[index].className);
  }
}

document.getElementById('salvar-tarefas').addEventListener('click', saveCompletedItems);

function resetList() {
  const listLength = parseInt(localStorage.getItem('listLength'));
  for (let index = 0; index < listLength; index += 1) {
    const tagLi = document.createElement('li');
    tagLi.className = localStorage.getItem(`item${index} className`);
    tagLi.innerText = localStorage.getItem(`item${index}`);
    document.getElementById('lista-tarefas').appendChild(tagLi);
  }
}

 function moveUp() {
  const items = document.getElementsByClassName('list-item');
  for (let index = 1; index < items.length; index += 1) {
    if (items[index].style.backgroundColor === 'rgb(128, 128, 128)') {
      items[index - 1].innerText = items[index].innerText;
    }
    if (items[index].style.backgroundColor === 'rgb(128, 128, 128)') {
      items[index - 1].className = items[index].className;
    }
    if (items[index].style.backgroundColor === 'rgb(128, 128, 128)') {
      items[index - 1].style.backgroundColor = 'rgb(128, 128, 128)';
    }
  }
}

document.getElementById('mover-cima').addEventListener('click', moveUp);

function removeSelectedItem () {
  const items = document.getElementsByClassName('list-item');
  for (let index = 0; index < items.length; index += 1) {
    if (items[index].style.backgroundColor === 'rgb(128, 128, 128)') {
      document.getElementById('lista-tarefas').removeChild(items[index]);
    }
  }
}

document.getElementById('remover-selecionado').addEventListener('click', removeSelectedItem);
