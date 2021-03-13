// Desafio 5 a 7
function selectItem(eventoDeOrigem) {
    let exclueOld = document.getElementsByClassName('selected');
    if (exclueOld.length > 0) {
        exclueOld[0].style.background = '';
        exclueOld[0].classList.remove('selected');
        eventoDeOrigem.target.classList.add('selected');
        exclueOld[0].style.background = 'rgb(128,128,128)';
    } else {
        eventoDeOrigem.target.classList.add('selected');
        eventoDeOrigem.target.style.background = 'rgb(128,128,128)';
    }
}

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
    // Adiciona o escutador de eventos
    let currentLists = document.getElementsByTagName('li');
    for (let index = 0; index < currentLists.length; index += 1) {
        currentLists[index].addEventListener('click', selectItem);
    }
}

const createTask = document.getElementById('criar-tarefa');
createTask.addEventListener('click', addTask);
