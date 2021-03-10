// EVENTOS EM VÁRIOS ELEMENTOS
const eventClickList = () => {
  document.querySelectorAll('li').forEach((element) => {
    element.addEventListener('click', (elementTarget) => {
      const listElement = elementTarget.target;
      const listElements = document.getElementsByTagName('li');

      for (let index = 0; index < listElements.length; index += 1) {
        if (listElements[index].id === 'selected-task') {
          listElements[index].id = '';
        }
      }
      listElement.id = 'selected-task';
    });
  });
};

// BOTÃO DE CRIAR
const btnCreateTask = document.getElementById('criar-tarefa');
const oListTask = document.getElementById('lista-tarefas');
btnCreateTask.addEventListener('click', () => {
  const listTaskElement = document.createElement('li');
  const inputTextTask = document.getElementById('texto-tarefa');
  listTaskElement.innerText = inputTextTask.value;
  oListTask.appendChild(listTaskElement);
  eventClickList();
  inputTextTask.value = '';
});
