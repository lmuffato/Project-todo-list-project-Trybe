const inputItens = document.querySelector('#criar-tarefa'); // Variaveis Gerais.
const listOfTasks = document.getElementById('lista-tarefas');

// Funções Gerais e Eventos.
inputItens.addEventListener('click', function () { // Cria os items na lista ol.
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

listOfTasks.addEventListener('click', function (event) { // Ao selecionar algum item da li marca em cinza
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