window.onload = () => {
    /* -------- button add --------- */
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

    /* ------- actived Li -------- */
    function paintBackground(e) {
        if (document.querySelector('.active') !== null) {
            document.querySelector('.active').classList.remove('active');
            e.target.classList.add('active');
        } else {
            e.target.classList.add('active');
        }
    }

    list.addEventListener('click', paintBackground);
};
