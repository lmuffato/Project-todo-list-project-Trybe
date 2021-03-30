// Requisitos 5 e 6
const list = document.getElementById('lista-tarefas');

function btnAddNewTask() {
  const newListItem = document.createElement('li');
  const taskText = document.getElementById('texto-tarefa');

  list.appendChild(newListItem).innerHTML = taskText.value;
  taskText.value = '';
}

const addNewTask = () => {
  const btnCreateTask = document.getElementById('criar-tarefa');
  btnCreateTask.addEventListener('click', btnAddNewTask);
};

addNewTask();

// Requisitos 7 e 8
// Modelo de código do Vitor Dias Gonçalves
// https://github.com/tryber/sd-010-b-project-todo-list/pull/133/commits/810caf8d499b7f8d731535b81c77e3f0b153449c
const selected = document.querySelector('.fundo-cinza');
const gray = 'fundo-cinza';

function paintGrey() {
  list.addEventListener('click', (event) => {
    if (selected != null) {
      selected.classList.remove(gray);
    }

    event.target.classList.add(gray);
  });
}

paintGrey();

// Requisito 9
// Modelo de código do Vitor Dias Gonçalves
// https://github.com/tryber/sd-010-b-project-todo-list/pull/133/commits/810caf8d499b7f8d731535b81c77e3f0b153449c
function textLine() {
  list.addEventListener('dblclick', (event) => {
    event.target.classList.toggle('completed');
  });
}

textLine();

function clearAll() {
  const btnClear = document.getElementById('apaga-tudo');
  btnClear.addEventListener('click', () => {
    while (list.firstChild) {
      list.removeChild(list.firstChild);
    }
  });
}

clearAll();

// Requisito 11
function deleteFinished() {
  const btnDeleteFinished = document.getElementById('remover-finalizados');
  btnDeleteFinished.addEventListener('click', () => {
    const finished = document.querySelectorAll('.completed');

    for (let index = 0; index < finished.length; index += 1) {
      list.removeChild(finished[index]);
    }
  });
}

deleteFinished();

// Requisito 12
function salvamento() {
  const salvarLI = list.innerHTML;
  localStorage.listaSalva = salvarLI;
}

function carregarListaSalva() {
  if (localStorage.listaSalva) {
    list.innerHTML = localStorage.listaSalva;
  }
}

carregarListaSalva();

const btnSave = document.getElementById('salvar-tarefas');
btnSave.addEventListener('click', salvamento);

// Requisito 14
// function deleteSelected() {
//   const btnDeleteSelected = document.getElementById('remover-selecionado');
//   btnDeleteSelected.addEventListener('click', () => {

//   });
// }

// deleteSelected();
const tasks = document.getElementsByTagName('li');

function deleteSelected() {
  for (let i = 0; i < tasks.length; i += 1) {
    list.removeChild(tasks[i]);
    if (selected != null) {
      document.querySelector(gray).classList.remove(gray);
    }
    list.removeChild(selected);
  }
}

const btnDeleteSelected = document.getElementById('remover-selecionado');
btnDeleteSelected.addEventListener('click', deleteSelected);
