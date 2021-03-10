const btnCreateTask = document.getElementById('criar-tarefa');
const oListTask = document.getElementById('lista-tarefas');
const btnRemoveAll = document.getElementById('apaga-tudo');
const btnRemoveCompleted = document.getElementById('remover-finalizados');
const btnSaveList = document.getElementById('salvar-tarefas');
const btnRemoveSelected = document.getElementById('remover-selecionado');
const idName = 'selected-task';
const loadList = () => {
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

btnSaveList.addEventListener('click', () => {
  localStorage.setItem('lists', oListTask.innerHTML);
});

btnRemoveSelected.addEventListener('click', () => {
  oListTask.removeChild(document.getElementById(idName));
});

loadList();

/*
REFERÊNCIAS:
https://www.w3schools.com/jsref/prop_element_classlist.asp
https://stackoverflow.com/questions/10842471/how-to-remove-all-elements-of-a-certain-class-from-the-dom
*/
