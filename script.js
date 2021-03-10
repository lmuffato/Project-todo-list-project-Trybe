function buttonCreateTaks() {
  let button = document.getElementById('criar-tarefa');
  
  button.addEventListener('click', newTask);

  function newTask () {
    let listHeader = document.getElementById('lista-tarefas');
    let itemList = document.createElement('li');
    itemList.innerHTML = document.getElementById('texto-tarefa').value;
    listHeader.appendChild(itemList);
    document.getElementById('texto-tarefa').value = '';
  }
}

buttonCreateTaks();