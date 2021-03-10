const botaoCriaTarefa = document.querySelector('#criar-tarefa');
let inputTexto = document.querySelector('#texto-tarefa');
let listaDeTarefas = document.querySelector('#lista-tarefas');

botaoCriaTarefa.addEventListener('click', criaTarefa);

function criaTarefa() {
    if (inputTexto.value !== '') {
        let lista = document.createElement('li');
        lista.innerText = inputTexto.value;
        inputTexto.value = '';
        listaDeTarefas.appendChild(lista);
    }
    
}