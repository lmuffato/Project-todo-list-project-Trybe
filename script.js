let input = document.querySelector('#texto-tarefa');

let totalList = document.querySelector('#lista-tarefas');
let buttonNewLi = document.getElementById('criar-tarefa');

function createLi() {
   if(input.value !== ''){
    let newLi = document.createElement('li');
    newLi.innerHTML = input.value;
    totalList.appendChild(newLi);
    input.value = ''
   }
}

window.onload = function init() {

    buttonNewLi.addEventListener('click', createLi);

}