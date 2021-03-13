// REQUISITO 5 - Adicionar um botão com ID='criar-tarefa', que ao clicar o novo item deve aparecer no final da lista, e o texto do input deve ser limpo //

const buttonAddTask = document.querySelector('#criar-tarefa');
const addListTask = document.querySelector('#lista-tarefas');
buttonAddTask.addEventListener('click', addTask);

function addTask() {
  if (buttonAddTask.value !== '') {
    const createItems = document.createElement('li');
    createItems.className = 'task';
    createItems.innerHTML = buttonAddTask.value;
    addListTask.appendChild(createItems);
    buttonAddTask.value = '';
  }
}

window.onload = function () {
  addTask();
};
