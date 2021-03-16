window.onload = function (){
    // Função para zerar input
    function clearInput () {
        document.getElementById('texto-tarefa').value = '';
    }

        
    function mostra () {
        let item = document.getElementsByTagName('li');
        for (let index = 0; index < item.length; index += 1) {
            let control = item[index];
            control.addEventListener('click', (a) => {
                a.target.style.backgroundColor = "black";
                console.log(a)
            })
        }
    }
    let addList = [];
    // Pega o clique do botão 
    let btn = document.getElementById("criar-tarefa");
    // cria a variável que irá receber o texto do input
    let pushInput = ''
    // cria um contador para adicionar mais elementos na lista
    let cont = 0;

    btn.addEventListener('click', function (){
        pushInput = document.getElementById('texto-tarefa').value;
        addList = document.getElementsByTagName('li');
        // Cria os elementos 'li'
        let pushOl = document.getElementById('lista-tarefas');
        let creatLi = document.createElement('li');
        pushOl.appendChild(creatLi);
        //adiciona a lista e acrescenta 1 números        
        addList[cont].innerText = pushInput;
        cont += 1;
        mostra();
        // Limpa o campo input
        clearInput();
        //console.log(addList);
        
    });
    
} 




