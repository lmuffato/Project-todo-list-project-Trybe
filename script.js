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
let lista = document.querySelectAll('.listaDeTarefas');
for(lista[i] = 0; lista[i] < i; lista[i] +=1){
tarefa.addEventListener('click', () => {
  tarefa.style.backgroundColor = 'grey';
})
}
}


