const button = document.querySelector('#criar-tarefa');
const list = document.querySelector('#lista-tarefas');

button.addEventListener('click',() => {
    let listItens = document.createElement('li');
    listItens.className = 'listTask'
    listItens.innerText = document.querySelector('#texto-tarefa').value
    list.appendChild(listItens);
    document.querySelector('#texto-tarefa').value = ''
});



    