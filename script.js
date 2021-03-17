//Cria essa variável que será utilizada por diversas funções.
let elementoCriado = '';

//ADICIONAR EVENTO NA SELEÇÃO DE UM CLICK
//Função para selecionar as cores da paleta
document.querySelectorAll('.tarefa').forEach(elementoSelecionado => {
    elementoSelecionado.addEventListener('click', clickParaSelecionar);
    function clickParaSelecionar(eventoDeOrigem){
      //TESTE: Apenas para verificar no console se a cor está realmente sendo selecionada
      console.log(eventoDeOrigem.target);
      //Atribuia classe padrão a todos os elementos
      document.querySelectorAll('.tarefa').forEach(elementos => elementos.classList.replace("selected", "notSelected"));
      // Altera a classe do objeto seleiconado com a classe de seleção
      elementoSelecionado.classList.replace("notSelected", "selected")
      // Pinta cor de a cordo com a classe
      //Texto tachado
      //document.querySelector('.SELECIONADO').style.textDecorationLine = "line-through";
    } 
  }
  )

  //EVENTO COM DOUBLE CLICK COM PARA MARCAR COMO CONCLUÍDO
  document.querySelectorAll('.tarefa').forEach(elementoClicadoDuasVezes => {
    elementoClicadoDuasVezes.addEventListener('dblclick', doubleClickParaConcluir);
    function doubleClickParaConcluir(eventoDeOrigem){
      //TESTE: Apenas para verificar no console se a cor está realmente sendo selecionada
      console.log(eventoDeOrigem.target);
      //Se o elemento clicado duas vezes possui a classe 'noCompleted' em sua lista de classe, a classe muda para 'completed'.
      if (elementoClicadoDuasVezes.classList.contains('notCompleted')==true){
        elementoClicadoDuasVezes.classList.replace("notCompleted", "completed");
        } else {elementoClicadoDuasVezes.classList.replace("completed", "notCompleted");}
    } 
  }
)

//EXCLUIR TODOS OS ELMENTOS DE DE UMA CLASSE OU ID
function excluirTodosElementosDaMesmaClasseOuId (classOuId) {
    let quantidadeDeElementosParaExcluir = document.querySelectorAll(classOuId).length;
    for (indexExcluirElementos = 0; indexExcluirElementos < quantidadeDeElementosParaExcluir; indexExcluirElementos+=1) {
        document.querySelectorAll(classOuId)[0].remove()
    }
}
