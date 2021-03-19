
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
    const ol = document.querySelector('#lista-tarefas')
    const recuperaClass = document.getElementsByClassName('list')
    function addBackgroundColor() {
        ol.addEventListener('click', (event) => {
          const backgroundColor = event.target;
          for (let index = 0; index < recuperaClass.length; index += 1) {
            if (recuperaClass[index].className.includes('selected')) {
              recuperaClass[index].classList.remove('selected');
            }
          }
          backgroundColor.classList.add('selected');
        });
      }
      addBackgroundColor();