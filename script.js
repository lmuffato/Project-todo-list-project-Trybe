// 5 REQUISITO
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
    listAdd.classList.add('color-change');
    listAdd.addEventListener('click', newColor);
//apagar input
    document.getElementById('texto-tarefa').value = '';
}

// 7 REQUISITO
   
// função para troca de cor
function newColor (event) {

    let selectedItem = event.target;    
    let itemSelectedCurrent = document.getElementsByClassName('elementSelected')
     if(itemSelectedCurrent.length > 0) {
        
        itemSelectedCurrent[0].classList.remove('elementSelected');
        
} selectedItem.classList.add('elementSelected');
    
}   
