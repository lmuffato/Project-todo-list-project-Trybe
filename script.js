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

function colorChange(e){
    let listItens = document.querySelectorAll('li');
    for(let index = 0; index < listItens.length; index += 1){
      listItens[index].style.backgroundColor = 'white';
    }
    e.target.style.backgroundColor = 'rgb(128, 128, 128)';
}

window.onload = function init() {
    buttonNewLi.addEventListener('click', createLi);
    totalList.addEventListener('click', colorChange);
}