window.onload = function (){

function createButton () {
    let button = document.getElementById('botao');
    let newButton = document.createElement('button');
    newButton.id = 'criar-tarefa';
    newButton.innerHTML = 'Adicionar';
    button.appendChild(newButton);
}
createButton();

// pratica 5 - https://stackoverflow.com/questions/26688323/appending-input-value-to-list-using-javascript-to-do-list
function clickButton (){
    
    let click = document.getElementById('criar-tarefa');
    click.addEventListener('click', function (event){
        let btnClick = event.target;
        let addLi = document.getElementById('lista-tarefas');
        let li = document.createElement('li');
        let text = document.getElementById('texto-tarefa');
        li.innerHTML = text.value;
        text.value = '';
        addLi.appendChild(li);
    })
}
clickButton ();




}