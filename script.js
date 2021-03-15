//Criação das Funções:

const getOl = document.getElementById('lista-tarefas');

function completedTask(event) {
  if (event.target.className === 'listClass') {
    event.target.classList.add('completed');
  } else if (event.target.className === 'listClass completed') {
    event.target.className = 'listClass';
  }
}

function setColor(event) {
  const fullList = document.getElementsByClassName('listClass');
  for (let index = 0; index < fullList.length; index += 1) {
    fullList[index].style.backgroundColor = 'white';
    console.log('pinta li');
  }
  event.target.style.backgroundColor = 'rgb(128,128,128)';
}

function createTask() {
  console.log('create task ok');
  const inputText = document.getElementById('texto-tarefa').value;
  if (inputText === '') {
    alert('Digite algo!');
  } else {
    const createList = document.createElement('li');
    createList.innerHTML = inputText;
    createList.className = 'listClass';
    createList.addEventListener('dblclick', completedTask);
    createList.addEventListener('click', setColor);
    getOl.appendChild(createList);
  }
}

function clearList() {
  const getClass = document.getElementsByClassName('listClass');
  while (getClass.length !== 0) {
    for (let index = 0; index < getClass.length; index += 1) {
      getOl.removeChild(getClass[index]);
    }
  }
}
function clearFinalized() {
  const getClass = document.getElementsByClassName('listClass completed');
  while (getClass.length !== 0) {
    for (let index = 0; index < getClass.length; index += 1) {
      getOl.removeChild(getClass[index]);
    }
  }
}

//Programação dos Botões

const taskButton = document.getElementById('criar-tarefa');
taskButton.addEventListener('click', createTask);
taskButton.addEventListener('click', () => {
  document.getElementById('texto-tarefa').value = '';
});

const clearButton = document.getElementById('apaga-tudo');
clearButton.addEventListener('click', clearList);

const clearFinalizedButton = document.getElementById('remover-finalizados');
clearFinalizedButton.addEventListener('click', clearFinalized);
