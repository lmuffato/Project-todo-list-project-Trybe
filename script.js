const taskWriten = document.querySelector('#texto-tarefa');

// Requisitos 5 e 6
// Lógica para pegar texto do input e apagá-lo ao final vista no repositório
// do Jodiel https://github.com/tryber/sd-010-a-project-todo-list/pull/70
function AddToList(){
    let addButton = document.querySelector('#criar-tarefa');
    addButton.addEventListener('click', function(){
        let list = document.querySelector('#lista-tarefas');
        let elementList = document.createElement('li');
        let text = taskWriten.value;
        elementList.innerHTML = text;
        list.appendChild(elementList);
        taskWriten.value = '';
    });
}

AddToList();