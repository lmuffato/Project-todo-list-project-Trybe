let input = document.querySelector('#texto-tarefa');
let clickButton = document.querySelector('#criar-tarefa');
let valueToList = document.querySelector('#lista-tarefas');

clickButton.addEventListener('click', click);

function click() {
    let listValue = document.createElement('li');
    listValue.innerText = input.value;
    valueToList.appendChild(listValue);
    input.value = '';
}