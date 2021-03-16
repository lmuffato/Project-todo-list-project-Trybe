const listaDeTarefas = document.querySelector('#lista-tarefas')

function inputTarefa () {
const botaoInputTarefa = document.querySelector('#criar-tarefa');
botaoInputTarefa.addEventListener('click', () => {
    const criaLi = document.createElement('li');
    const textoLi = document.getElementById('texto-tarefa').value;
    criaLi.innerHTML = textoLi;
    listaDeTarefas.appendChild(criaLi);
    document.getElementById('texto-tarefa').value = '';
});
}
inputTarefa ();