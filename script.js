//Cria Botao
const botao = document.createElement('button');
botao.id = 'criar-tarefa'
botao.innerHTML = 'Criar Tarefa';
document.getElementById('espacoDoBotao').appendChild(botao);
botao.addEventListener('click', clickDoBotao);

function clickDoBotao() {
    let pegaTexto = document.getElementById('texto-tarefa').value;
    let criaLista = document.createElement('li');
    criaLista.className = 'listasCriadas'
    criaLista.innerText = pegaTexto;
    document.getElementById('lista-tarefas').appendChild(criaLista);
    document.getElementById('texto-tarefa').value = '';
    criaLista.addEventListener('click', mudaCorDaLista);
}

function mudaCorDaLista() {
    for (let index = 0; index < document.getElementsByClassName('listasCriadas').length; index += 1) {
        document.getElementsByClassName('listasCriadas')[index].addEventListener('click', () => {
            document.getElementsByClassName('listasCriadas')[index].style.backgroundColor = 'rgb(128,128,128)';
        } );
    }
}
mudaCorDaLista();