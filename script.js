// Requisito 5 - Botão cria tarefa
let lista = document.querySelector('#lista-tarefas')
let input = document.querySelector('#texto-tarefa');
const botao = document.querySelector('.botao');

function criaTarefa() {
let li = document.createElement('li');
let tarefa = document.createTextNode(input);

botao.addEventListener('click', ()=> {
lista.appendChild(li);
li.innerHTML = input.value;
input.value = '';
})
}

criaTarefa ();




 



// Requisito 7 - Pinta tarefas de cinza

function pintaTarefa (){
let lista = document.querySelectAll('.listaDeTarefas');
for(lista[i] = 0; lista[i] < i; lista[i] +=1){
tarefa.addEventListener('click', () => {
  tarefa.style.backgroundColor = 'grey';
})
}
}


