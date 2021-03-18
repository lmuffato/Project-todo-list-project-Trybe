const taskButton = document.getElementById('criar-tarefa');
const inputButton = document.getElementById('texto-tarefa');
const orderedList = document.getElementById('lista-tarefas');

function mainButton() {
  taskButton.addEventListener('click', () => {
   let liList = document.createElement('li');
   liList.className = 'list-order';
    liList.innerText = inputButton.value;
    orderedList.appendChild(liList);
    inputButton.value = '';
  });
}
mainButton();

function backColor() {
    const liList = document.getElementsByClassName('list-order');
    orderedList.addEventListener('click', (event) => {
        event.target.classList.add('backColor');
    });
}
backColor();