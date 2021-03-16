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

updateLocalStorage()
addTask()

/* 7 - Clicar em um item da lista deve alterar a cor de fundo do item para cinza rgb(128,128,128) */
const list = document.querySelector('#lista-tarefas');
const lines = document.querySelectorAll('li');

function selectTask() {
  list.addEventListener('click', function (event) {
    event.target.classList.add('selected');
    for (let index = 0; index < lines.length; index += 1) {
      if (lines[index] !== event.target) {
        lines[index].classList.remove('selected');
      }
    }
  });
}
selectTask();