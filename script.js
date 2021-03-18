// Requisito 5 - Botão cria tarefa

let lista = document.querySelector('#lista-tarefas');
let input = document.querySelector('#texto-tarefa');
function criaLI() {
  const botao = document.querySelector(".botao");
  botao.addEventListener("click", (evento) => {
    let li = document.createElement("li");
    lista.appendChild(li).innerHTML;
    li.innerText = input.value;
    input.value = '';
    console.log(lista);
  });
  
}
criaLI();



// Requisito 7 - Pinta tarefas de cinza

function pintaTarefa (){
  const lista = document.getElementsByTagName('ol')[0];
  const tarefa = document.getElementsByTagName('li');
    lista.addEventListener('click', (event) => {
        const targetEvent = event.target;
        for (let index = 0; index < tarefa.length; index += 1) {
            tarefa[index].style.backgroundColor = document.body.style.backgroundColor;
            if (targetEvent.localName === 'li') {
                targetEvent.style.backgroundColor = 'rgb(128, 128, 128)';
            }
        }
    });
}

pintaTarefa();

