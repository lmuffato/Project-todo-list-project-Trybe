const btnTask = document.querySelector('#criar-tarefa');
const tasksList = document.querySelector('#lista-tarefas');
const deleteAll = document.querySelector('#apaga-tudo');
const deleteCompleted = document.querySelector('#remover-finalizados')

btnTask.addEventListener('click', function () {
  const textTask = document.getElementById('texto-tarefa').value;
  document.getElementById('texto-tarefa').value = '';
  const list = document.createElement('li');
  list.innerText = textTask;
  tasksList.appendChild(list);
  list.classList.add('listItem');
  list.style.backgroundColor = 'white';
});

tasksList.addEventListener('click', function (event) {
  const lists = document.querySelectorAll('li');
  for (let list = 0; list < lists.length; list += 1) {
    if (lists[list].style.backgroundColor = 'white') {
      event.target.style.backgroundColor = 'rgb(128, 128, 128)';
      lists[list].classList.remove('selected');
      event.target.classList.add('selected');
    } else {
      event.target.backgroundColor = 'rgb(128, 128, 128)';
      event.target.classList.add('selected');
    }
  }
});

tasksList.addEventListener('dblclick', function (event) {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
});

deleteAll.addEventListener('click', function () {
  const listItemsToDelete = document.querySelectorAll('li');
  for (let indexEraseAll = 0; indexEraseAll < listItemsToDelete.length; indexEraseAll += 1) {
    listItemsToDelete[indexEraseAll].outerHTML = '';
  }
});

deleteCompleted.addEventListener('click', function () {
  const listItemsComplete = document.querySelectorAll('li');
  for (let indexCompleted = 0; indexCompleted < listItemsComplete.length; indexCompleted += 1) {
    if (listItemsComplete[indexCompleted].classList.contains('completed')) {
      listItemsComplete[indexCompleted].outerHTML = '';
    }
  }
});
