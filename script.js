const taskButton = document.getElementById('criar-tarefa');
const inputButton = document.getElementById('texto-tarefa');
const orderedList = document.getElementById('lista-tarefas');




function mainButton() {
  taskButton.addEventListener('click', () => {
   let liList = document.createElement('li');
    liList.innerText = inputButton.value;
    orderedList.appendChild(liList);
    inputButton.value = '';
  });
}
mainButton();