/* No campo de input será digitado o texto de uma tarefa qualquer e, em seguida, clicar-se-á no botão de criar tarefa. Será verificado que, após o clique, o texto digitado aparece na lista e desaparece do input. */
const olElment = document.querySelector('#lista-tarefas');
function creatTasks() {
  const button = document.querySelector('#criar-tarefa');
  button.addEventListener('click', () => {
    const inputElement = document.querySelector('#texto-tarefa');
    const getText = inputElement.value;
    const liElment = document.createElement('li');
    liElment.innerHTML = getText;
    olElment.appendChild(liElment);
    inputElement.value = '';
  });
}
creatTasks();
/* 7 - Clicar em um item da lista deve alterar a cor de fundo do item para cinza rgb(128,128,128) */
function createBgColor() {
  olElment.addEventListener('click', (e) => {
    const elementClicked = e;
    elementClicked.target.className = 'bg';
    console.log(elementClicked);
  });
}
createBgColor();

function clearList() {
  const clearAllList = document.querySelector('#apaga-tudo');
  clearAllList.addEventListener('click', () => {
    const itensList = document.querySelector('#lista-tarefas');
    itensList.innerHTML = '';
  });
}
clearList();
