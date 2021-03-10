function CriarTarefa(){

    let TextoDigitado = document.querySelector('input').value;
    let ListaTarefas = document.querySelector('lista-tarefas');
    let botaoCriarTarefa = document.querySelector('criar-tarefa');

    botaoCriarTarefa.addEventListener('click', clicar);

    function clicar(){
        let li = document.createElement('li');
        li.innerText = TextoDigitado;
        ListaTarefas.appendChild('li');
        TextoDigitado.innerText = '';

    }

}

CriarTarefa()