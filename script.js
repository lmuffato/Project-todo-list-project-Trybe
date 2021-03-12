function createTask() {
    console.log('create task ok')
    inputText = document.getElementById('texto-tarefa').value;
    if (inputText === '') {
        alert('Digite algo!');
    } else {
        let createList = document.createElement('li');
        createList.innerHTML = inputText;
        createList.className = 'listClass'
        createList.addEventListener('click', setColor);
        document.getElementById('lista-tarefas').appendChild(createList);
    }
}

let button = document.getElementById('criar-tarefa');
button.addEventListener('click', createTask);
// button.addEventListener('click', function(){
//     document.getElementById('texto-tarefa').value = '';
// });
button.addEventListener('dblclick', completedTask);

function completedTask(event) {
    event.target.classList.add('completed');
    console.log('completed task ok')
}

function setColor(event) {
    let fullList = document.getElementsByClassName('listClass');
    for (let index = 0; index < fullList.length; index += 1) {
        fullList[index].style.backgroundColor = 'white';
        console.log('pinta li')
    }
    event.target.style.backgroundColor = 'gray';    
}