function addTask() {
    const addButton = document.getElementById('criar-tarefa');
    addButton.addEventListener('click', () => {
        const input = document.getElementById('texto-tarefa').value;
        const itenList = document.createElement('li');
        if (input !== '') {
            document.getElementById('lista-tarefas').appendChild(itenList).innerText = input;
            document.getElementById('texto-tarefa').value = '';
        }
    })
}
addTask()