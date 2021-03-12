//Criação das Funções:

function completedTask(event) {
    event.target.classList.add('completed');
    console.log('completed task entrou')
  }

function setColor(event) {
let fullList = document.getElementsByClassName('listClass');
for (let index = 0; index < fullList.length; index += 1) {
    fullList[index].style.backgroundColor = 'white';
    console.log('pinta li');
}
event.target.style.backgroundColor = 'rgb(128,128,128)';    
}

function createTask() {
  console.log('create task ok')
  let inputText = document.getElementById('texto-tarefa').value;
  if (inputText === '') {
    alert('Digite algo!');
} else {
  let createList = document.createElement('li');
  createList.innerHTML = inputText;
  createList.className = 'listClass'
  createList.addEventListener('dbclick', completedTask);
  createList.addEventListener('click', setColor);
  document.getElementById('lista-tarefas').appendChild(createList);
}
}

//Programação do Botao

let button = document.getElementById('criar-tarefa');
button.addEventListener('click', createTask);
button.addEventListener('click', function() {
  document.getElementById('texto-tarefa').value = '';
});
