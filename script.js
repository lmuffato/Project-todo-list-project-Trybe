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

function selecionaTarefa () {
    listaDeTarefas.addEventListener('click',(element) => {
        const selecionado = document.querySelector('#selecionado')
        if (selecionado !== null) {
            document.querySelector('#selecionado').style.backgroundColor = 'white';
            document.querySelector('#selecionado').id = '';
        } else {
            element.target.id = 'selecionado';
            document.querySelector('#selecionado').style.backgroundColor = 'rgb(128, 128, 128)';
        }
    });
}
selecionaTarefa ();
// console.log()