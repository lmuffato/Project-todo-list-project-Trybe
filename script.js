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
  }

}

buttonCreateTaks();

function changeColorItems() {
  let itemLi = document.getElementsByTagName('li');
  console.log(itemLi);

  for (let index = 0; index < itemLi.length; index += 1) {
    itemLi[index].addEventListener('click', paintBrush);
    function paintBrush(event) {
      for (index = 0; index < itemLi.length; index += 1) {
        itemLi[index].style.backgroundColor = 'white';
      }
      event.target.style.backgroundColor = 'rgb(128,128,128)';
    }
  }

}

