// Requisito 5 e 6 - Clicando no Botão e adicionando uma nova lista ordenada
function newList() {
    const getTextoTarefa = document.querySelector('#texto-tarefa');
    const getCriarTarefa = document.querySelector('#criar-tarefa');
    const getListaTarefa = document.querySelector('#lista-tarefas');

    getCriarTarefa.addEventListener('click', () => {
        if (getTextoTarefa.value.length > 0) {
            const novaLista = document.createElement('li');
            novaLista.innerText = getTextoTarefa.value;
            novaLista.id = 'item';
            getListaTarefa.appendChild(novaLista);
            getTextoTarefa.value = '';
        }
    });
}
newList();

// Requisito 7
// Exerício realizado com a ajuda do código do Guilherme Lira
// Link: https://github.com/tryber/sd-010-a-project-todo-list/blob/bb5985c0ec0c474bfb90708581a880b9822623a9/script.js
function changingBackgroundGreen() {
    const getIDListaTarefas = document.querySelector('#lista-tarefas');

    getIDListaTarefas.addEventListener('click', (event) => {
        event.target.style.backgroundColor = 'rgb(128, 128, 128)';
    });
}
changingBackgroundGreen();
