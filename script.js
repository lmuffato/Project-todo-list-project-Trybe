const taskbutton = document.getElementById('criar-tarefa');
const inputTarefa = document.getElementById('texto-tarefa');
const listaTarefas = document.getElementById('lista-tarefas');

taskbutton.addEventListener('click', function() {
    let newtask = document.createElement('li');
    newtask.innerText = inputTarefa.value;
    listaTarefas.appendChild(newtask);
    inputTarefa.value = null
})