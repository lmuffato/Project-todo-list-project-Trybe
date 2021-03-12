const input = document.querySelector('#texto-tarefa');
const button = document.querySelector('#criar-tarefa');
const list = document.querySelector('#lista-tarefas');
const elementsList = document.querySelector('.elementList');

function main () {
    button.addEventListener('click',() => {
    let listItens = document.createElement('li');
    listItens.innerText = input.value;
    list.appendChild(listItens);
    input.value = '';
    
        let list2 = document.querySelectorAll('li');
        for (let i = 0; i < list2.length; i += 1){
            list2[i].addEventListener('click', () => {
            clean();
            list2[i].className = 'color';
            });
        }
        const classColor = document.querySelectorAll('.color')
        function clean (){
            for (let i = 0; i < classColor.length; i += 1) {
            classColor[i].classList.remove('color');
            }
        }
    
    });
    
}
main();
    
 