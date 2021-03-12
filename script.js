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