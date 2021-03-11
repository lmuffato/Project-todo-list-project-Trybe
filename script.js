//requisito 5 e 6 e 7
    
let botaoCriarTarefa = document.querySelector('#criar-tarefa');

botaoCriarTarefa.addEventListener('click', criarTarefa);

function criarTarefa(){
        
    let ListaTarefas = document.querySelector('#lista-tarefas');
    let TextoDigitado = document.querySelector('input').value;
    let li = document.createElement('li'); //crio a li
    li.innerText = TextoDigitado; // coloco o valor do input dentro da li
    ListaTarefas.appendChild(li); //colo a li como filha da ol
    document.querySelector('input').value = ''; //não pude usar a variavel textodigitado 

    // crio o requisito 7 e 8 aqui, pois esse evento só acontece depois que clicamos a li e criamos a li foi criada e está dentro da função criarTarefa
    //primeiro eu fiz um array para retirar a classe cor lista caso exista em algum lugar da lista, se não existe eu posso adicionar a classe
    li.addEventListener('click', function(event){
    let tarefa = event.target; 
    
    tarefasArray = document.querySelectorAll('.cor-lista');  
    for (index = 0; index < tarefasArray.length; index += 1){
        tarefasArray[index].classList.remove('cor-lista')   
    }

    tarefa.classList.add('cor-lista'); 

    }); 

    //requisito 9 colocar e tirar text decoration  https://www.w3schools.com/jsref/prop_element_classlist.asp
    // faço um if pois quero que ou a classe seja adicionada ou removida. Primeiro olho se já tem, se tem eu tiro, se não eu coloco
    li.addEventListener('dblclick', function(event){
        let tarefa = event.target; 
        if (tarefa.classList.contains('completed')){
        tarefa.classList.remove('completed');
        //tarefa.style.textDecoration = 'transparent';
        } else {
        tarefa.classList.add('completed');
        //tarefa.style.textDecoration = 'line-through solid rgb(0, 0, 0)'; 
        }
    }); 
        
}

//requisito 10 apaga a lista
let botaoApagar = document.querySelector('#apaga-tudo');

botaoApagar.addEventListener('click', function(){
    let ListaTarefas = document.querySelector('#lista-tarefas');
    let tarefas = document.querySelectorAll('li');
    for (index = 0; index < tarefas.length; index += 1){
        ListaTarefas.removeChild(tarefas[index]); 
    } 
    //let ListaTarefas = document.querySelector('#lista-tarefas');
    //ListaTarefas.innerHTML =''; // coloco a ol com o conteudo vazio ---> dica do Marcus Cesar tumarma 10-A
});

//requisito 11 apaga os finalizados
let botaoApagarFinalizadas = document.querySelector('#remover-finalizados');

botaoApagarFinalizadas.addEventListener('click',function(){
    let ListaTarefas = document.querySelector('#lista-tarefas');
    let ListaTarefasFinalizadas = document.querySelectorAll('.completed');
    for (index = 0; index < ListaTarefasFinalizadas.length; index += 1){
        ListaTarefas.removeChild(ListaTarefasFinalizadas[index]);
    }       
});
