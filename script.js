// Item 5. Adiciona evento click no input texto, cria intem dentro da ol e apaga o texto do input

function addTask() {
    const inputTask = document.querySelector('#texto-tarefa');
    const li = document.createElement('li');
    li.innerHTML = inputTask.value;
    document.querySelector('#lista-tarefas').appendChild(li);
    inputTask.value = '';
}

const task = document.querySelector('#criar-tarefa');
task.addEventListener('click', addTask);

