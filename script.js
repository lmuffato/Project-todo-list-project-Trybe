// Item 5. Adiciona evento click no input texto, cria intem dentro da ol e apaga o texto do input

function addTask() {
    const inputTask = document.querySelector('#texto-tarefa');
    const li = document.createElement('li');
    li.innerHTML = inputTask.value;

    li.addEventListener('click', function() {
        const liArray = document.querySelectorAll('li');
        for (let index = 0; index < liArray.length; index += 1) {
            liArray[index].style.backgroundColor = '';
        }
        addColor(li)
    })

    document.querySelector('#lista-tarefas').appendChild(li);
    inputTask.value = '';
}

const task = document.querySelector('#criar-tarefa');
task.addEventListener('click', addTask);

// adicona cor ao clicar no item da listados
// colocar cor na li clicada
function addColor(li) {
    li.style.backgroundColor= 'rgb(128, 128, 128)';
}


