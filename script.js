const inputItens = document.querySelector('#criar-tarefa'); // Variaveis Gerais.
const taskList = document.getElementById('lista-tarefas');

// Funções Gerais e Eventos.
inputItens.addEventListener('click', function () { // Cria os items na lista ol.
  const taskInput = document.getElementById('texto-tarefa').value;
  if (taskInput !== '') {
    const newLine = document.createElement('li');
    newLine.innerHTML = taskInput;
    taskList.appendChild(newLine);
    document.getElementById('texto-tarefa').value = '';
  } else {
    alert('Invalid entry!');
  }
});
