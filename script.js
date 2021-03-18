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


  let lista = document.querySelector('#lista-tarefas')

  
  lista.addEventListener('click', recebeClick)

  function recebeClick (eventoDeOrigem) {
    evento.target.style.backgroundColor = 'rgb(128,128,128)'
        
  
    }
      
   