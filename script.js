const buttonNewToDo = document.querySelector('#criar-tarefa');
const buttonCleanAll = document.querySelector('#apaga-tudo');
const buttonRemoveFinished = document.querySelector('#remover-finalizados');
const input = document.querySelector('#texto-tarefa');

function createNewTodo() {
  var newLi = document.createElement('li');
  newLi.innerText = input.value;
  document.getElementById('lista-tarefas').appendChild(newLi);
  input.value = '';
}

buttonNewToDo.addEventListener('click',createNewTodo);

function itemListSelect() {
  const ol = document.querySelectorAll('#lista-tarefas')[0];
  ol.addEventListener('click', () => {
    const li = document.querySelectorAll('li');
    for(let index = 0; index < li.length; index += 1) {
      li[index].style.backgroundColor = 'rgb(128, 128, 128)';
      const color ='rgb(128, 128,128)';
      if (li[index].style.backgroundColor === color){
        li[index].style.backgroundColor = 'rgb(0, 161, 157)';
      } else {
        li[index].style.backgroundColor = color;
      }
    }
  });
}
itemListSelect();
