let botao = document.querySelector('#criar-tarefa');

function tasks (recebeTarefa) {
    let varPai = document.querySelector('#lista-tarefas')
    let varSon = document.createElement('li');
    varSon.innerText = recebeTarefa;
    varPai.appendChild(varSon);
}

botao.addEventListener('click', function() {
    console.log('click aconteceu');
    let recebeTarefa = document.querySelector('#texto-tarefa').value;
    tasks(recebeTarefa);
    document.querySelector('#texto-tarefa').value = '';
});
