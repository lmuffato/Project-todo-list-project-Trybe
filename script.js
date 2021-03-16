/* 5 - Adicione um botão com id="criar-tarefa" e, ao clicar nesse botão, um novo item deverá ser criado ao final da lista e o texto do input deve ser limpo */
const orderedList = document.getElementById('lista-tarefas');

const updateStorage = () => { localStorage.setItem('lists', orderedList.innerHTML); };  

const addTask = () => {
  document.getElementById('criar-tarefa').addEventListener('click', () => {
    const tasklist = document.createElement('li');
    const inputTask = document.getElementById('texto-tarefa');

    tasklist.innerText = inputTask.value;
    orderedList.appendChild(tasklist);
    inputTask.value = '';
  });
};

window.onload = () => {
updateStorage()
addTask()
};