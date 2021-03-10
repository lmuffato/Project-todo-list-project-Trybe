function buttonCreateTaks() {
  let button = document.getElementById('criar-tarefa');
  
  button.addEventListener('click', newTask);

  function newTask () {
    let listHeader = document.getElementById('lista-tarefas');
    let itemList = document.createElement('li');
    itemList.innerHTML = document.getElementById('texto-tarefa').value;
    listHeader.appendChild(itemList);
    document.getElementById('texto-tarefa').value = '';
    changeColorItems();
    completeTasks();
    clean();
    killerChecked()
  }

}

buttonCreateTaks();

function changeColorItems() {
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
}

function completeTasks() {
  let itemL = document.getElementsByTagName('li');

  for (let index = 0; index < itemL.length; index += 1) {
    itemL[index].addEventListener('dblclick', risc);

    function risc(event) {
      if (event.target.className === 'completed') {
        event.target.className = '';
      } else {
        event.target.className = 'completed';
      }
    }
  }
}

function clean() {
  let buttonClean = document.getElementById('apaga-tudo');
  let list = document.getElementsByTagName('li');
  console.log(list.length);

  buttonClean.addEventListener('click', limpar);

  function limpar() {
    for (let index = 0; index < list.length; index += 1) {
      list[index].remove();
    }
  }
}

function killerChecked() {
  let myButton = document.getElementById('remover-finalizados');
  let list = document.getElementsByTagName('li');

  myButton.addEventListener('click', funcao);

  function funcao() {
    for (let index = 0; index < list.length; index += 1) {
      if (list[index].className === 'completed') {
        list[index].remove();
      }
    }
  }
 


}


