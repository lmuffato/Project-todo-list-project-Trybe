/* 5 - Adicione um botão com id="criar-tarefa" e, ao clicar nesse botão, um novo item deverá ser criado ao final da lista e o texto do input deve ser limpo */
/* Ref.: https://www.w3schools.com/js/js_events.asp */
const orderedList = document.getElementById('lista-tarefas');

const updateLocalStorage = () => { localStorage.setItem('lists', orderedList.innerHTML); };

const addTask = () => {
  document.getElementById('criar-tarefa').addEventListener('click', () => {
    const tasklist = document.createElement('li');
    const inputTask = document.getElementById('texto-tarefa');

    tasklist.innerText = inputTask.value;
    orderedList.appendChild(tasklist);
    inputTask.value = '';
  });
};

updateLocalStorage();
addTask();

/* 7 - Clicar em um item da lista deve alterar a cor de fundo do item para cinza rgb(128,128,128) */
/* 8 - Não deve ser possível selecionar mais de um elemento da lista ao mesmo tempo */
const list = document.querySelector('#lista-tarefas');

function selectTask() {
  list.addEventListener('click', function (event) {
    event.target.classList.add('selected');
    const lines = document.querySelectorAll('li');
    for (let index = 0; index < lines.length; index += 1) {
      if (lines[index] !== event.target) {
        lines[index].classList.remove('selected');
      }
    }
  });
}
selectTask();

/* 9 - Clicar duas vezes em um item, faz com que ele seja riscado, indicando que foi completo. Deve ser possível desfazer essa ação clicando novamente duas vezes no item */
function doubleClick(event) {
  const itemDoubleClicked = event.target;
  if (itemDoubleClicked.classList.contains('completed')) {
    itemDoubleClicked.classList.remove('completed');
  } else {
    itemDoubleClicked.classList.add('completed');
  }
}
orderedList.addEventListener('dblclick', doubleClick);

document.getElementById('apaga-tudo').addEventListener('click', clearList);

/* Adicione um botão com id="apaga-tudo" que quando clicado deve apagar todos os itens da lista */
const Erase = document.querySelector('#apaga-tudo');

function eraseList() {
  orderedList.innerHTML = '';
}

Erase.addEventListener('click', eraseList);
