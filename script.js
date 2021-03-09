let clickButton = document.querySelector('#criar-tarefa');
let valueToList = document.querySelector('#lista-tarefas');

clickButton.addEventListener('click', click);

function click() {
    let valueInput = document.querySelector('#texto-tarefa').value;
    let listValue = document.createElement('li');
    listValue.innerText = valueInput;
    valueToList.appendChild(listValue);
    valueInput.innerText = '';
}