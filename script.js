// Requirement 9;

function taskCompleted() {
  const selectLis = document.querySelectorAll('li');
  for (let index = 0; index < selectLis.length; index += 1) {
    if (selectLis[index].className === 'selected') {
      selectLis[index].classList.add('completed');
    } else if (selectLis[index].className === 'completed selected') {
      selectLis[index].classList.remove('completed');
    }
  }
}

// Requirement 7, 8;

function changeBackgroundColor(Event) {
  const task = Event.target;
  const selectLis = document.querySelectorAll('li');
  for (let index = 0; index < selectLis.length; index += 1) {
    if (selectLis[index].className === 'selected'
    || selectLis[index].className === 'selected completed'
    || selectLis[index].className === 'completed selected') {
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
  createLI.addEventListener('dblclick', taskCompleted);
  selectOL.appendChild(createLI);
  selectInputText.value = '';
}

function createTask() {
  const selectButton = document.querySelector('#criar-tarefa');
  selectButton.addEventListener('click', addTask);
}

createTask();

// Requirement 10;

function removeTask() {
  const selectLis = document.querySelectorAll('li');
  for (let index = 0; index < selectLis.length; index += 1) {
    selectLis[index].remove('li');
  }
}

function clickButtonClearTasks() {
  const selectButton = document.querySelector('#apaga-tudo');
  selectButton.addEventListener('click', removeTask);
}
clickButtonClearTasks();
