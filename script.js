function adicionarItem() {
  const pegarBotao = document.querySelector('#criar-tarefa');
  const pegarTagTextoTarefa = document.querySelector('#texto-tarefa');
  
  pegarBotao.addEventListener('click', function(event) {
  const escreverTarefa = document.querySelector('input').value;
  
  if(escreverTarefa != ''){
    const criarTopico = document.createElement('li');
    criarTopico.className = 'TopicoCriado';
    criarTopico.innerHTML = escreverTarefa;
    const listaTarefa = document.querySelector('#lista-tarefas');
    listaTarefa.appendChild(criarTopico);
    pegarTagTextoTarefa.value = null;
  }else{
    alert('Por Favor Amigão, insira alguma tarefa!!');
  }
  });
}
adicionarItem();

function alterarCorFundoDoItem(){
  const criarTopico = document.querySelector('section');
   
  criarTopico.addEventListener('click', function(event) {
    if(event.target.className === 'TopicoCriado'){
      const pegaLinha = document.querySelectorAll('li');
    for(let index = 0; index < pegaLinha.length; index += 1){
      if(pegaLinha[index] != event.target){
        pegaLinha[index].style.backgroundColor = 'rgb(255,255,255)';
      }else{
        pegaLinha[index].style.backgroundColor = 'rgb(128,128,128)';
      }
    }
  }
  });
}

alterarCorFundoDoItem();

function botaoApagaTudo(){
  const clearButton = document.createElement('button');
  clearButton.id="apaga-tudo";
  clearButton.innerHTML = 'Apagar Tudo';
  const localizacaoButton = document.querySelector('section');
  
  localizacaoButton.appendChild(clearButton);

  clearButton.addEventListener('click', function(event){
  const listaDeTarefas = document.querySelectorAll('li');
    for(let index =0; index < listaDeTarefas.length; index += 1){
      listaDeTarefas[index].remove();  
    }
  });
}

botaoApagaTudo();

function riscarItemDaLista(){
  const listaTarefa = document.querySelector('#lista-tarefas');
  listaTarefa.addEventListener('dblclick', function(event){
  const pegaLinha = document.querySelectorAll('li');
  for (let index = 0; index < pegaLinha.length; index += 1) {
    if(pegaLinha[index] === event.target){
      if(pegaLinha[index].classList.contains('completed')){
      pegaLinha[index].classList.remove('completed');
     }else{
      pegaLinha[index].classList.add('completed');
     }
    }
  } 
  });
}

riscarItemDaLista();
