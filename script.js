// REQUISITO 5 - Adicionar um botão com ID='criar-tarefa', que ao clicar o novo item deve aparecer no final da lista, e o texto do input deve ser limpo //

const buttonAddTask = document.querySelector('#criar-tarefa');
const addItem = document.querySelector('#texto-tarefa');
const addListTask = document.querySelector('#lista-tarefas');
const createItems = document.createElement('li');
buttonAddTask.addEventListener('click', addTask);
addItem.addEventListener('keyup', insertItemsListKeyUp);

function addTask() {
  if (addItem.value !== '') {
    createItems.className = 'task';
    createItems.innerHTML = addItem.value;
    addListTask.appendChild(createItems);
    addItem.value = '';
  }
}

function insertItemsListKeyUp(event) { // Resolução baseada no conteúdo do site https://pt.stackoverflow.com/questions/180333/evento-tecla-enter-no-input
  const key = event.which || event.keyCode;

  if (addItem.value !== '' && key === 13) {
    createItems.className = 'task';
    createItems.innerHTML = addItem.value;
    addListTask.appendChild(createItems);
    addItem.value = '';
  }
}

// REQUISITO 7 - Clicar em um item da lista deve alterar a cor de fundo do item para cinza //

function changeGray() {
  addListTask.addEventListener('click', (event) => {
    for (let index = 0; index < addListTask.children.length; index += 1) {
      addListTask.children[index].style.backgroudColor = '';
    }
    event.target.style.backgroudColor = 'rgb(128, 128, 128)';
  });
}

window.onload = function () {
  addTask();
  changeGray();
};
