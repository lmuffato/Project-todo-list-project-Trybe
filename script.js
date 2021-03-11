// Desafio 4
let createTask = document.getElementById('criar-tarefa');
createTask.addEventListener('click', addTask);

function addTask() {
    // Captura informação de texto
    let actualizeText = document.getElementById('texto-tarefa');
    let saveText = actualizeText.value;
    // Cria o elemento da lista
    let accessList = document.getElementById('lista-tarefas');
    let creatListElement = document.createElement('li');
    // preenche com o texto
    creatListElement.innerHTML = saveText;
    let print = accessList.appendChild(creatListElement);
    // Apaga a entrada na caixa de digitação
    actualizeText.value = '';
    return print;
}
