const taskButton = document.getElementById('criar-tarefa');
const inputButton = document.getElementById('texto-tarefa');
const orderedList = document.getElementById('lista-tarefas');
const liList = document.getElementsByClassName('list-order');

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
    const liList = document.getElementsByTagName('li');
    orderedList.addEventListener('click', (event) => {
        const click = event.target;
        for (let index = 0; index < liList.length; index += 1){
            liList[index].style.backgroundColor = document.body.style.backgroundColor;
        if (click.localName === 'li'){
            click.style.backgroundColor = 'rgb(128, 128, 128)';
        }
        }
    });
}
backColor();