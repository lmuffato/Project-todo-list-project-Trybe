// Requirement 7, 8;

function changeBackgroundColor(Event) {
  const task = Event.target;
  const selectLis = document.querySelectorAll('li');
  for (let index = 0; index < selectLis.length; index += 1) {
    if (selectLis[index].className === 'selected') {
      selectLis[index].classList.remove('selected');
    }
  }
  task.classList.add('selected');
}

// Requirement 5, 6;

function addTask() {
  const selectInputText = document.querySelector('#texto-tarefa');
  const selectOL = document.querySelector('#lista-tarefas');
  const createLI = document.createElement('li');
  createLI.innerHTML = selectInputText.value;
  createLI.addEventListener('click', changeBackgroundColor);
  selectOL.appendChild(createLI);
  selectInputText.value = '';
}

function createTask() {
  const selectButton = document.querySelector('#criar-tarefa');
  selectButton.addEventListener('click', addTask);
}

createTask();
