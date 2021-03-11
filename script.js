function liCreation (){
    let li = document.querySelector('#criar-tarefa');
    let getOlList = document.querySelector('#lista-tarefas')
    li.addEventListener('click', () => {
        let Lcreate = document.createElement('li');
        let writeText = document.getElementById('texto-tarefa').value;
        Lcreate.innerHTML = writeText;
        getOlList.appendChild(Lcreate);
        writeText = document.getElementById('texto-tarefa').value;('')
    })
}
liCreation()