//Cria Botao
let botao = document.createElement('button');
botao.innerHTML = 'Criar Tarefa';
document.getElementById('espacoDoBotao').appendChild(botao);
botao.addEventListener('click', clickDoBotao);

function clickDoBotao() {
    let pegaTexto = document.getElementById('texto-tarefa').value;
    let criaLista = document.createElement('li');
    criaLista.innerText = pegaTexto;
    document.getElementById('lista-tarefas').appendChild(criaLista);
    document.getElementById('texto-tarefa').value = '';
}