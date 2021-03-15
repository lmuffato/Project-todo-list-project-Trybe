let input = document.querySelector('#texto-tarefa');
let button = document.querySelector('#criar-tarefa');
let list = document.querySelector('#lista-tarefas');

button.addEventListener('click', click);

function click() {
    let listValue = document.createElement('li');
    listValue.innerText = input.value;
    list.appendChild(listValue);
    input.value = '';
}

//requisito 7
 list.addEventListener('click', function clickItem(e) {
    let listItem = list.childNodes;
    for (let index = 0; index < listItem.length; index += 1) {
        listItem[index].style.backgroundColor = 'white';
    }
    e.target.style.backgroundColor = 'rgb(128, 128, 128)';
}); 

/* list.addEventListener('click', function clickItem(e) {
    limpar(e);
    e.target.style.backgroundColor = 'red';
})

function limpar(e) {
    e.target.style.remove('backgroundColor');
} */