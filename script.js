// Desafio 5
const createTask = document.getElementById('criar-tarefa');
createTask.addEventListener('click', addTask);

function addTask() {
    // Captura informação de texto
    const actualizeText = document.getElementById('texto-tarefa');
    const saveText = actualizeText.value;
    // Cria o elemento da lista
    const accessList = document.getElementById('lista-tarefas');
    const creatListElement = document.createElement('li');
    // preenche com o texto
    creatListElement.innerHTML = saveText;
    const print = accessList.appendChild(creatListElement);
    // Apaga a entrada na caixa de digitação
    actualizeText.value = '';
    return print;
}

//Desafio 7
function selectItem (position) {
    let tasks = document.getElementsByTagName('li');
    tasks[position].style.background = 'rgb(128,128,128)';
}

for (let index7 = 0; index7 < tasks.length; index7 +=1){
    document.getElementsByTagName('li')[index7].addEventListener('click', selectItem(index7))
}