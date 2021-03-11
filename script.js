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
      /* changeColorItems(); */
      cleanItems();
      killerChecked();
      colorItem();
    });
  
}

buttonCreateTaks();
completedTasks();

/* function changeColorItems() {
  let itemLi = document.getElementsByTagName('li');

  for (let index = 0; index < itemLi.length; index += 1) {
    itemLi[index].addEventListener('click', paintBrush);
    function paintBrush(event) {
      for (index = 0; index < itemLi.length; index += 1) {
        itemLi[index].style.backgroundColor = '';
      }
      event.target.style.backgroundColor = 'rgb(128,128,128)';
    }
  }
} */

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

function cleanItems() {
  let buttonClean = document.getElementById('apaga-tudo');
  let list = document.getElementsByTagName('li');

  buttonClean.addEventListener('click', limpar);

  function limpar() {
    for (let index = 0; index < list.length; index += 1) {
      list[index].remove();
    }
  }
}

function killerChecked() {
  let btnRemoveEnded = document.getElementById('remover-finalizados');
  let list = document.getElementsByTagName('li');

  btnRemoveEnded.addEventListener('click', ()=>{
    for (let index = 0; index < list.length; index += 1) {
      if (list[index].classList.contains('completed')) {
        list[index].remove();
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




