const btnCreateTask = document.getElementById('criar-tarefa');
const oListTask = document.getElementById('lista-tarefas');
const btnRemoveAll = document.getElementById('apaga-tudo');

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
/*
REFERÊNCIAS:
https://www.w3schools.com/jsref/prop_element_classlist.asp
*/
