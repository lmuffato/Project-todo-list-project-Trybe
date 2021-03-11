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

    // crio o requisito 7 aqui, pois esse evento só acontece depois que clicamos a li e criamos a li foi criada e está dentro da função criarTarefa
    li.addEventListener('click', function(event){
    let tarefa = event.target;
    tarefa.style.backgroundColor = 'rgb(128, 128, 128)';
    }); 

    //requisito 8
    /*let listaTarefasArray = document.querySelector('#lista-tarefas li');

    for (index = 0; index < listaTarefaArray.length; index += 0){
        listaTarefaArray[index]
    } */

    //requisito 9
    /*li.addEventListener('dblclick', function(event){
        let tarefa = event.target;
        tarefa.classList.add('completed');
        tarefa.style.textDecoration = 'line-through solid rgb(0, 0, 0)';
    }); 
    /*li.addEventListener('dblclick', function(event){
        let tarefa = event.target;
        tarefa.classList.remove('completed');
        tarefa.style.textDecoration = 'none';
    });*/
        
}

//requisito 10

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



//requisito 11

let botaoApagarFinalizadas = document.querySelector('#remover-finalizados');

botaoApagarFinalizadas.addEventListener('click',function(){
    let ListaTarefas = document.querySelector('#lista-tarefas');
    let ListaTarefasFinalizadas = document.querySelectorAll('.completed');
    for (index = 0; index < ListaTarefasFinalizadas.length; index += 1){
        ListaTarefas.removeChild(ListaTarefasFinalizadas[index]);
    }       
});




   
//requisito 7
/* 

let listaTarefasArray = document.querySelector('#lista-tarefas li');

for (index = 0; index < listaTarefaArray.length; index += 0){
    listaTarefaArray[index].addEventListener('click', function(event){
            let tarefa = event.target;
            tarefa.style.backgroundColor = 'rgb(128, 128, 128)';
        });
}

*/