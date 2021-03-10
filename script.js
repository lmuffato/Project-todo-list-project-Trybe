window.onload = function (){

function createButton () {
    let button = document.getElementById('botao');
    let newButton = document.createElement('button');
    newButton.id = 'criar-tarefa';
    newButton.innerHTML = 'Adicionar';
    button.appendChild(newButton);
}
createButton();

// pratica 5 e 6 - https://stackoverflow.com/questions/26688323/appending-input-value-to-list-using-javascript-to-do-list
function clickButton (){
    
    let click = document.getElementById('criar-tarefa');
    click.addEventListener('click', function (event){
        let btnClick = event.target;
        let addLi = document.getElementById('lista-tarefas'); //ol
        let li = document.createElement('li');
        let text = document.getElementById('texto-tarefa');
        li.innerHTML = text.value;
        li.addEventListener('click', function (event){
            let evt = event.target;
            evt.style.backgroundColor = 'rgb(128, 128, 128)';
        });
        text.value = '';
        addLi.appendChild(li);
    })
}
clickButton ();


// // prática 7
// function backGrey (){
//     let backColor = document.querySelectorAll('#lista-tarefas li');

//     for (let i = 0; i < backColor.length; i += 1){
       
//         });
//     }
// }
// backGrey ();





}