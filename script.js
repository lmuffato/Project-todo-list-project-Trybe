

function resetBackColor() {
    const liWhite = document.getElementsByClassName('item');
    for (let i = 0; i < liWhite.length; i += 1) {
        liWhite[i].style.backgroundColor = 'cornflowerblue';
    }
}

function troughLine(e) {
    if (e.target.className === 'item') {
        e.target.className = 'item completed';
    }
    else {
        e.target.className = 'item';
    }
}

function backgroundLiColor(e) {
    resetBackColor()
    e.target.style.backgroundColor = 'rgb(128,128,128)';
}

function addLi() {
    const olTasks = document.getElementById('lista-tarefas')
    const taskText = document.getElementById('texto-tarefa')
    let liCreate = document.createElement('li');
    liCreate.innerText = taskText.value;
    olTasks.appendChild(liCreate);
    taskText.value = '';
    liCreate.addEventListener('dblclick', troughLine)
    liCreate.className = 'item';
    liCreate.addEventListener('click', backgroundLiColor)
}

function buttonClearAll() {
    const itemsToClean = document.getElementById('lista-tarefas');
    for (let index = itemsToClean.children.length - 1; index >= 0; index -= 1) {
        itemsToClean.children[index].remove();
    }
}

function clearButton() {
    const clearOnClick = document.getElementById('apaga-tudo');
    clearOnClick.addEventListener('click', buttonClearAll);
}

function createListItems() {
    const taskCreate = document.getElementById('criar-tarefa')
    taskCreate.addEventListener('click', addLi);
}
createListItems()
clearButton()