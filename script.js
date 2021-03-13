const listHeader = document.getElementById('lista-tarefas');

function cleanCompletedTasks() {
  const listItems = document.getElementsByTagName('li');
  const buttonClearCompleted = document.getElementById('remover-finalizados');
  buttonClearCompleted.addEventListener('click', () => {
    for (let index = 0; index < listItems.length; index += 1) {
      if (listItems[index].classList.contains('completed')) {
        listItems[index].remove();
      }
    }
  });
}

function buttonCreateTaks() {
  const button = document.getElementById('criar-tarefa');
  button.addEventListener('click', () => {
    const itemList = document.createElement('li');
    itemList.innerText = document.getElementById('texto-tarefa').value;
    if (itemList.textContent !== '') {
      listHeader.appendChild(itemList);
      document.getElementById('texto-tarefa').value = '';
    }
    cleanCompletedTasks();
  });
}

function completedTasks() {
  const myList = document.getElementById('lista-tarefas');

  myList.addEventListener('dblclick', (e) => {
    if (e.target.classList.contains('completed')) {
      e.target.classList.remove('completed');
    } else {
      e.target.classList.add('completed');
    }
  });
}

function cleanAllTasks() {
  const btnClean = document.getElementById('apaga-tudo');

  btnClean.addEventListener('click', () => {
    while (listHeader.lastElementChild) {
      listHeader.removeChild(listHeader.lastElementChild);
    }
  });
}

function colorItem() {
  listHeader.addEventListener('click', (e) => {
    e.target.classList.add('selected');
    const allItems = document.querySelectorAll('li');
    for (let index = 0; index < allItems.length; index += 1) {
      if (allItems[index] !== e.target) {
        allItems[index].classList.remove('selected');
      }
    }
  });
}

function removeSelected() {
  const btnRemoveSelected = document.getElementById('remover-selecionado');
  const itemList = document.getElementsByTagName('li');

  btnRemoveSelected.addEventListener('click', () => {
    for (let index = 0; index < itemList.length; index += 1) {
      if (itemList[index].classList.contains('selected')) {
        itemList[index].remove();
        break;
      }
    }
  });
}

removeSelected();
buttonCreateTaks();
completedTasks();
cleanAllTasks();
colorItem();
