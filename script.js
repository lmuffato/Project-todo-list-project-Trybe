function getInputHtml() {
  const getOl = document.querySelector('#lista-tarefas');
  const getInput = document.querySelector('#texto-tarefa');
  const getButton = document.querySelector('#criar-tarefa');

  function add() {
    const valueLi = getInput.value;
    const createLi = document.createElement('li');
    createLi.classList.add('list');
    createLi.appendChild(document.createTextNode(valueLi));
    getOl.appendChild(createLi);
    getInput.value = '';
  }
  getButton.onclick = function() {
    add();
  };
}
// Requisito 7
// 7. Clicar em um item da lista de alterar o bgColor para rgb(128, 128, 128)
function changeBackgroundColor(event) {
  if (event.target.className === 'list') {
    const selectedLi = event.target;
    selectedLi.style.backgroundColor = 'rgb(128, 128, 128)';
  }
}

function managerEvents() {
// Gerencia os eventos
// 7. Recuperar o pai dos meus itens de lista
  const taskList = document.querySelector('#lista-tarefas');
  taskList.addEventListener('click', changeBackgroundColor);
}
window.onload = function start() {
// Chama as funções
  getInputHtml();
  managerEvents();
};
