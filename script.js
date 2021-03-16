const btn = document.querySelector('#criar-tarefa');
const conteudo = document.querySelector('#texto-tarefa');
const lista = document.querySelector('#lista-tarefas');
function create() {

    const item = document.createElement('li');
    item.innerHTML = conteudo.value;
    lista.appendChild(item);
    conteudo.value = "";

}
btn.addEventListener('click', create);


function marcar(event){
    const array = document.querySelectorAll('#lista-tarefas');
    for(let index = 0; index < array.length; index++){
        const element = array[index];
        event.target.style.backgroundColor = 'rgb(128, 128, 128)';
    }
}

lista.addEventListener('click', marcar);