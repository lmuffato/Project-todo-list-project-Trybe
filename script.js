function criarTarefa() {
    let botao = document.getElementById('criar-tarefa');

    botao.addEventListener('click', (evento) => {
    let recuperandoListaOrdenada = document.querySelector('#lista-tarefas')
    let criandoLi = document.createElement('li');
    criandoLi.className = 'list'
      criandoLi.innerText = document.getElementById('texto-tarefa').value;
      recuperandoListaOrdenada.appendChild(criandoLi).innerHTML
      document.getElementById('texto-tarefa').value;
      document.getElementById('texto-tarefa').value = '';
    });
  }
  criarTarefa();





  let click = document.getElementById('lista-tarefas')
  

  //Adicionar evento ao click
  click.addEventListener('click', recebeClick)
    
  function recebeClick (evento) {
       //recupera o elemento
    console.log(evento.target.style.backgroundColor = 'blue')
    console.log(evento.type)
    // informa o tipo do evento
    }
    