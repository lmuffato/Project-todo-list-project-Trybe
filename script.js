const inputItems = document.querySelector('#criar-tarefa'); // Variaveis Gerais.
const listOfTasks = document.getElementById('lista-tarefas');
const deleteItems = document.getElementById('apaga-tudo');

// Funções Gerais e Eventos.
inputItems.addEventListener('click', function () { // Cria as tarefas digitadas colocando na lista ol.
  const taskInput = document.getElementById('texto-tarefa').value;
  if (taskInput !== '') {
    const newLine = document.createElement('li');
    newLine.innerHTML = taskInput;
    listOfTasks.appendChild(newLine);
    document.getElementById('texto-tarefa').value = '';
  } else {
    alert('Invalid entry!');
  }
});

listOfTasks.addEventListener('click', function (event) { // Ao selecionar algum item da li o marca em cinza
  const listItem = document.getElementsByTagName('li');
  event.target.style.backgroundColor = 'rgb(128,128,128)';
  event.target.id = 'isSelected';
  for (let i = 0; i < listItem.length; i += 1) {
    if (listItem[i] !== event.target) {
      listItem[i].style.backgroundColor = 'transparent';
      listItem[i].id = 'none';
    }
  }
});

listOfTasks.addEventListener('dblclick', function (event) { // Ao dar doubleclick em um item a função "risca", selecionando o mesmo.
  if (event.target.className !== 'completed') {
    event.target.className = 'completed';
  } else {
    event.target.className = '';
  }
});

deleteItems.addEventListener('click', function () {
  const lines = document.getElementsByTagName('li');
  for (let i = 0; i < lines.length; i += 0) {
    lines[i].remove();
  }
});