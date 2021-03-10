//requisito 5 e 6 e 7
    
    let botaoCriarTarefa = document.querySelector('#criar-tarefa');

    botaoCriarTarefa.addEventListener('click', criarTarefa);

    function criarTarefa(){
        
        let ListaTarefas = document.querySelector('#lista-tarefas');
        let TextoDigitado = document.querySelector('input').value;
        let li = document.createElement('li');
        li.innerText = TextoDigitado;
        ListaTarefas.appendChild(li);
        document.querySelector('input').value = '';

        // crio o requisito 7 aqui, pois esse evento só acontece depois que criamos a li e criamos a li só quando o evento de cliclar no botão acontee
        li.addEventListener('click', function(event){
            let tarefa = event.target;
            tarefa.style.backgroundColor = 'rgb(128, 128, 128)';
        });
    }


