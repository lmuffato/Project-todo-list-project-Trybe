const btnTask = document.querySelector('#criar-tarefa');
const tasksList = document.querySelector('#lista-tarefas');
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
