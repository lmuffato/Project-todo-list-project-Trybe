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
function paintGrey() {
  list.addEventListener('click', (event) => {
    const selected = document.querySelector('.fundo-cinza');

    if (selected != null) {
      selected.classList.remove('fundo-cinza');
    }

    event.target.classList.add('fundo-cinza');
  });
}

paintGrey();

// Requisito 9
function textLine() {
  list.addEventListener('dblclick', (event) => {
    event.target.classList.toggle('completed');
  });
}

textLine();
