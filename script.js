// Requisito 5 - Botão cria tarefa
function criaTarefa () {
    //const input = document.getElementById ('texto-tarefa');
    const botao = document.getElementById ('criar-tarefa');
    //const lista = document.getElementById ('lista-tarefas');
    //for (let index = 0; index < input.lenght; index + 1) {
        botao.addEventListener('click', () => {
            document.getElementById('lista-tarefas').appendChild(document.getElementById('texto-tarefa'))
        })
        criaTarefa()
}
    

