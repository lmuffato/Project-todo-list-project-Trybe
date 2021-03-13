function buttonCreateTaks() {
  let button = document.getElementById('criar-tarefa');
  let listHeader = document.getElementById('lista-tarefas');
  button.addEventListener('click', ()=>{
    let itemList = document.createElement('li');
    itemList.innerText = document.getElementById('texto-tarefa').value;
      if (itemList.textContent !== '') { 
        listHeader.appendChild(itemList);
        document.getElementById('texto-tarefa').value = ''; 
      }
      cleanCompletedTasks();
    });  
}

function completedTasks() {
  let myList = document.getElementById('lista-tarefas');
  
  myList.addEventListener('dblclick', (e)=>{
    if (e.target.classList.contains('completed')) {
      e.target.classList.remove('completed');
    } else {
      e.target.classList.add('completed');
    }
  });
}

function cleanAllTasks() {

  let listHeader = document.getElementById('lista-tarefas');
  let btnClean = document.getElementById('apaga-tudo');

  btnClean.addEventListener('click', ()=>{
    while (listHeader.lastElementChild) {
      listHeader.removeChild(listHeader.lastElementChild);
    }
  });
}

function cleanCompletedTasks() {
  let listItems = document.getElementsByTagName('li');
  let buttonClearCompleted = document.getElementById('remover-finalizados');
  buttonClearCompleted.addEventListener('click', ()=>{
    
    for (let index = 0; index < listItems.length; index += 1) {
      if (listItems[index].classList.contains('completed')) {
        listItems[index].remove();
      }
    }
  });


}

function colorItem() {
  let listHeader = document.getElementById('lista-tarefas');

  listHeader.addEventListener('click',(e)=> {
    e.target.classList.add('selected');
    let allItems = document.querySelectorAll('li');
    for (let index = 0; index < allItems.length; index += 1) {
      if (allItems[index] !== e.target) {
        allItems[index].classList.remove('selected');
      }
    }
          
  });
}

buttonCreateTaks();
completedTasks();
cleanAllTasks();
colorItem();








