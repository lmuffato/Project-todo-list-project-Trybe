let botao = document.querySelector('#criar-tarefa');

function tasks(recebeTarefa) {
    let varPai = document.querySelector('#lista-tarefas')
    let varSon = document.createElement('li');
    varSon.innerText = recebeTarefa;
    varPai.appendChild(varSon);
}

botao.addEventListener('click', function () {
    let recebeTarefa = document.querySelector('#texto-tarefa').value;
    tasks(recebeTarefa);
    document.querySelector('#texto-tarefa').value = '';
});
////////////////////////////////////////////////////////////////////////////
function setClass(item) {
    if (document.querySelector(".mystyle")) {
        let itemRemove = document.querySelector(".mystyle");
        itemRemove.classList.remove("mystyle");
        itemRemove.style.backgroundColor = '';

        item.className = "mystyle";
        item.style.backgroundColor = 'rgb(128, 128, 128)';
    } else {
        item.className = "mystyle";
        item.style.backgroundColor = 'rgb(128, 128, 128)';
    }
}

const taskList = document.getElementById('lista-tarefas');
taskList.addEventListener('click', () => {
    let clickedItem = event.target;
    setClass(clickedItem);
});

const taskList2 = document.getElementById('lista-tarefas');
taskList2.addEventListener('dblclick', () => {
    let itemDblclick = event.target;
    if (itemDblclick.style.textDecoration == 'line-through solid black') {
        itemDblclick.style.textDecoration = 'none';
    } else {
        itemDblclick.className = 'mystyle completed';
        itemDblclick.style.textDecoration = "line-through solid black";

    }
});

