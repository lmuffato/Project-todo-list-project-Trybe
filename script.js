let botao = document.querySelector('#criar-tarefa');

function tasks (recebeTarefa) {
    let varPai = document.querySelector('#lista-tarefas')
    let varSon = document.createElement('li');
    varSon.innerText = recebeTarefa;
    varPai.appendChild(varSon);
}

botao.addEventListener('click', function() {
    let recebeTarefa = document.querySelector('#texto-tarefa').value;
    tasks(recebeTarefa);
    document.querySelector('#texto-tarefa').value = '';
});

function setClass(item){
    if(document.querySelector(".mystyle")){
        let itemRemove = document.querySelector(".mystyle");
        itemRemove.classList.remove("mystyle");
        itemRemove.removeAttribute("style");
        itemRemove.removeAttribute("class");
        item.className = "mystyle";
        item.style.backgroundColor ='rgb(128, 128, 128)';
    }else{
        item.className = "mystyle";
        item.style.backgroundColor ='rgb(128, 128, 128)';
    }
}

const taskList = document.getElementById('lista-tarefas');
taskList.addEventListener('click',()=>{
    let clickedItem = event.target;
        setClass(clickedItem);
});

