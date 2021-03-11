const btnCreateTask = document.getElementById('criar-tarefa');
const oListTask = document.getElementById('lista-tarefas');
const btnRemoveAll = document.getElementById('apaga-tudo');
const btnRemoveCompleted = document.getElementById('remover-finalizados');
const btnSaveList = document.getElementById('salvar-tarefas');
const btnRemoveSelected = document.getElementById('remover-selecionado');
const btnMoveUp = document.getElementById('mover-cima');
const btnMoveDown = document.getElementById('mover-baixo');
const idName = 'selected-task';
const loadList = () => {
  btnSaveList.addEventListener('click', () => {
    localStorage.setItem('lists', oListTask.innerHTML);
  });

  oListTask.innerHTML = localStorage.getItem('lists');
};

btnCreateTask.addEventListener('click', () => {
  const listTaskElement = document.createElement('li');
  const inputTextTask = document.getElementById('texto-tarefa');

  listTaskElement.innerText = inputTextTask.value;
  oListTask.appendChild(listTaskElement);
  inputTextTask.value = '';
});

oListTask.addEventListener('click', (e) => {
  const listElement = e.target;
  const listElements = document.getElementsByTagName('li');

  for (let index = 0; index < listElements.length; index += 1) {
    if (listElements[index].id === idName) listElements[index].id = '';
  }

  listElement.id = idName;
});

oListTask.addEventListener('dblclick', (e) => {
  if (e.target.classList.contains('completed')) e.target.classList.remove('completed');
  else e.target.classList.add('completed');
});

btnRemoveAll.addEventListener('click', () => {
  oListTask.innerHTML = '';
});

btnRemoveCompleted.addEventListener('click', () => {
  document.querySelectorAll('.completed').forEach((e) => e.remove());
});

btnRemoveSelected.addEventListener('click', () => {
  oListTask.removeChild(document.getElementById(idName));
});

btnMoveUp.addEventListener('click', () => {
  const listSelected = document.getElementById(idName);
  const eList = document.getElementsByTagName('li');

  if (eList[0] === listSelected) return;

  for (let index = 0; index < eList.length; index += 1) {
    if (eList[index] === listSelected) {
      listSelected.outerHTML = eList[index - 1].outerHTML;
      eList[index - 1].outerHTML = listSelected.outerHTML;
    }
  }
});

btnMoveDown.addEventListener('click', () => {
  const listSelected = document.getElementById(idName);
  const eList = document.getElementsByTagName('li');

  if (eList[eList.length - 1] === listSelected) return;

  for (let index = 0; index < eList.length; index += 1) {
    if (eList[index] === listSelected) {
      listSelected.outerHTML = eList[index + 1].outerHTML;
      eList[index + 1].outerHTML = listSelected.outerHTML;
    }
  }
});

loadList();

/*
REFERÊNCIAS:
https://www.w3schools.com/jsref/prop_element_classlist.asp
https://stackoverflow.com/questions/10842471/how-to-remove-all-elements-of-a-certain-class-from-the-dom
https://stackoverflow.com/questions/1763479/how-to-get-the-html-for-a-dom-element-in-javascript
*/
