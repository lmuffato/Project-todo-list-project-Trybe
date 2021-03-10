window.onload = () => {
    const addButton = document.querySelector('#criar-tarefa');
    const list = document.querySelector('#lista-tarefas');

    function addTextToList() {
        let writedText = document.querySelector('#texto-tarefa').value;
        const createLi = document.createElement('li');
        createLi.innerHTML = writedText;
        list.appendChild(createLi);
        document.querySelector('#texto-tarefa').value = '';
    }

    addButton.addEventListener('click', addTextToList);

};
