const btnCreateTask = document.getElementById('criar-tarefa');
const oListTask = document.getElementById('lista-tarefas');
const btnRemoveAll = document.getElementById('apaga-tudo');
const btnRemoveCompleted = document.getElementById('remover-finalizados');
const btnSaveList = document.getElementById('salvar-tarefas');
const btnRemoveSelected = document.getElementById('remover-selecionado');

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
    if (listElements[index].id === 'selected-task') listElements[index].id = '';
  }

  listElement.id = 'selected-task';
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
  const arrayToConvert = [];
  const listToSave = document.querySelectorAll('li');

  for (let index = 0; index < listToSave.length; index += 1) {
    arrayToConvert.push(listToSave[index].innerText);
  }

  console.log(arrayToConvert);
  localStorage.setItem('lists', JSON.stringify(arrayToConvert));
});

btnRemoveSelected.addEventListener('click', () => {
  oListTask.removeChild(document.getElementById('selected-task'));
});

/*
REFERÊNCIAS:
https://www.w3schools.com/jsref/prop_element_classlist.asp
https://stackoverflow.com/questions/10842471/how-to-remove-all-elements-of-a-certain-class-from-the-dom
*/
