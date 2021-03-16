function addList() {
  const btnForAdd = document.querySelector('#criar-tarefa');
  btnForAdd.addEventListener('click', () => {
    const list = document.querySelector('#lista-tarefas');
    const leList = document.querySelector('#texto-tarefa');
    const li = document.createElement('li');
    li.innerHTML = leList.value;
    list.appendChild(li);
    document.getElementById('texto-tarefa').value = '';
  });
}
addList();

// precisei analisar o codigo do Gabriel Pereira para conseguir proceguir, link https://github.com/tryber/sd-010-a-project-todo-list/blob/515c53c7f57f62d816719e601efd0b7b9ad37c70/script.js //

function changingBackgroundGreen(event) {
  const eventTarget = event.target;
  eventTarget.style.backgroundColor = 'rgb(128, 128, 128)';
}

function eventchangeBackgroundGreen() {
  const getIDTarefaLista = document.getElementById('lista-tarefas');
  const getTarefa = getIDTarefaLista;
  getTarefa.addEventListener('click', changingBackgroundGreen);
}

eventchangeBackgroundGreen();
