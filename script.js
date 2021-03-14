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

function moveUp() {
  let buttonMvUp = document.getElementById('mover-cima');
  const itemList = document.getElementsByTagName('li');

  buttonMvUp.addEventListener('click', ()=>{
      for (let index = 0; index < itemList.length; index += 1) {
        if (itemList[index].classList.contains('selected')) {
          if (index === 0) {
            break;
          }
          listHeader.insertBefore(itemList[index], itemList[index - 1]);
        }
      }
  });
}

function moveDown() {
  let buttonMvDown = document.getElementById('mover-baixo');
  const itemList = document.getElementsByTagName('li');

  buttonMvDown.addEventListener('click', ()=>{
    for (let index = 0; index < itemList.length; index += 1) {
      if (itemList[index].classList.contains('selected')) {
        if (index === (itemList.length - 1)) {
          break;
        }
        let aux = itemList[index].innerHTML;
        itemList[index].innerHTML = itemList[index + 1].innerHTML;
        itemList[index + 1].innerHTML = aux;
        itemList[index].classList.remove('selected');
        itemList[index + 1].classList.add('selected');
        break;
      } 
    }   
  });
}

moveDown()
moveUp();
removeSelected();
buttonCreateTaks();
completedTasks();
cleanAllTasks();
colorItem();
