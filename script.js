const createTask = document.querySelector('#criar-tarefa');
const taskList = document.querySelector('#lista-tarefas');
const taskText = document.querySelector('#texto-tarefa');
const taskListLi = document.querySelector('#lista-tarefas').childNodes;

// Cria um item na "lista-tarefas" quando clicka no botão
function createLi() {
  let creatingLi = document.createElement('li');
  let textValue = taskText.value;
  creatingLi.innerText = textValue;

  taskList
    .appendChild(creatingLi)
    .addEventListener('dblclick', lineThroughItem);

  taskList
    .appendChild(creatingLi)
    .addEventListener('click', changeBackgroundColor);
  taskText.value = '';
}

createTask.addEventListener('click', createLi);

// Alterar a cor de fundo do item quando clicado
function changeBackgroundColor(event) {
  for (let j = 0; j < taskListLi.length; j += 1) {
    taskListLi[j].classList.remove('selected');
  }
  event.currentTarget.classList.add('selected');
}

// Criando o evento de clique duplo para riscar o item da lista
function lineThroughItem(event) {
  event.currentTarget.classList.toggle('completed');
}
