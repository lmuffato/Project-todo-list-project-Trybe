const buttonNewToDo = document.querySelector('#criar-tarefa');
const buttonCleanAll = document.querySelector('#apaga-tudo');
const buttonRemoveFinished = document.querySelector('#remover-finalizados');
const input = document.querySelector('#texto-tarefa');
const ol = document.querySelector('#lista-tarefas');
const li = document.querySelectorAll('li');

function createNewTodo() {
  var newLi = document.createElement('li');
  newLi.innerText = input.value;
  document.getElementById('lista-tarefas').appendChild(newLi);
  input.value = '';
}

buttonNewToDo.addEventListener('click',createNewTodo);
// as funções para os requisitos 7 e 8 foram feitas com base no código do colega Lucas Godoi;
function itemListSelect() {
  ol.addEventListener('click', () => {
    const li = document.querySelectorAll('li');
    for(let index = 0; index < li.length; index += 1) {
      li[index].style.backgroundColor = 'rgb(128, 128, 128)';
      const color ='rgb(128, 128, 128)';
        li[index].style.backgroundColor = color;
      }
  });
}
itemListSelect();

function selectItem() {
  ol.addEventListener('click', (event) => {
    const color = event.target;
    const li = document.querySelectorAll('li');
    for(let index = 0; index < li.length; index += 1) {
      li[index].style.backgroundColor = document.body.style.backgroundColor;
      if (color.localName === 'li') {
        color.style.backgroundColor = 'rgb(128, 128, 128)';
      }
    }
  });
}
selectItem();
