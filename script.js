function newTask () {
    let newItem = document.createElement('li');
    let itemValue = document.getElementById('texto-tarefa').value;
    if (itemValue === '') {
        alert('Por favor, digite um valor para adicionar à sua lista.')
    }   else {
        newItem.innerText = itemValue;
        document.getElementById('lista-tarefas').appendChild(newItem);
        //itemValue = '';
        document.getElementById('texto-tarefa').value = '';
    }
}

let btnAddTask = document.getElementById('criar-tarefa');
btnAddTask.addEventListener('click', newTask);