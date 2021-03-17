function inputElement(){
    const tagInput = document.querySelector('#texto-tarefa');
    const tagLi = document.createElement('li');
    tagLi.innerText = tagInput.value;
    const tagOl = document.querySelector('#lista-tarefas');
    tagOl.appendChild(tagLi);
}

function createAssignment() {
    const button = document.querySelector('#criar-tarefa');
    button.addEventListener('click', inputElement) 
}

createAssignment();