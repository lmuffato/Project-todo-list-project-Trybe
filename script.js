function addToList() {
    const button = document.querySelector('#criar-tarefa');
    const list = document.querySelector('#lista-tarefas');
    const input = document.querySelector('#texto-tarefa');
    function saveInput() {
        const value = input.value;
        const addListItem = document.createElement('li');
        addListItem.classList.add('list');
        addListItem.appendChild(document.createTextNode(value));
        list.appendChild(addListItem);
        button.value = '';
    }
    button.onclick = function() {
        saveInput();
    };
}





window.onload = function controlFunctions() {
    addToList();
    
}
