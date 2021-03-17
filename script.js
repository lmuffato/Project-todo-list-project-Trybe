//criar clique para o botão

let incluseTask = document.getElementById('criar-tarefa');
incluseTask.addEventListener('click', taskAdd);


function taskAdd () {
//recupera o input em uma variavel
    let valueInput = document.createTextNode(document.getElementById('texto-tarefa').value);
//incluir no html
    let originaList = document.getElementById('lista-tarefas')
    let listAdd = document.createElement('li');
    
    originaList.appendChild(listAdd);
    listAdd.appendChild(valueInput);
    
//apagar input
    document.getElementById('texto-tarefa').value = '';
}


