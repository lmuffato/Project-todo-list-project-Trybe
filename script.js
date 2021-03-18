function criarTarefa() {
    let botao = document.getElementById('criar-tarefa');

    botao.addEventListener('click', (evento) => {
    let recuperandoListaOrdenada = document.querySelector('#lista-tarefas')
    let criandoLi = document.createElement('li');
      criandoLi.innerText = document.getElementById('texto-tarefa').value;
      recuperandoListaOrdenada.appendChild(criandoLi).innerHTML
      document.getElementById('texto-tarefa').value;
      document.getElementById('texto-tarefa').value = '';
    });
  }
  criarTarefa();
  