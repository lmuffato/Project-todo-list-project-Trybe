window.onload = function (){
    // Função para zerar input
    function clearInput () {
        document.getElementById('texto-tarefa').value = '';
    }
    // Função que apaga o conteúdo todo
    function apagaConteudo() {
        let apagaTudo = document.getElementById('apaga-tudo');
        console.log(apagaTudo);
        let itemPai = document.querySelector('ol');
        let itemApagar = document.getElementsByTagName('li');
            apagaTudo.addEventListener('click', () => {
                for (let i = 0; i < itemApagar.length; i += 1) {
                    itemPai.removeChild(itemPai.childNodes[i]);
                }
            })
    }
    // Função que define o BG ao clicar num item 
    function mostra () {
        let item = document.getElementsByTagName('li');
        for (let index = 0; index < item.length; index += 1) {
            let control = item[index];
            control.addEventListener('click', (a) => {                
                a.target.style.backgroundColor = 'rgb(128, 128, 128)';
            })
        }
    }
    // Função que risca um item e remove (remove ainda não rolou)
    function line () {
        let selected = document.querySelectorAll('li');
        for (let index = 0; index < selected.length; index += 1) {
               let varIndex = selected[index];
            varIndex.addEventListener('dblclick', () => {
                let stilo = window.getComputedStyle(varIndex);
                if (stilo.textDecoration === 'line-through solid rgb(0, 0, 0)') {
                    varIndex.classList.remove('completed')
                }
                else {
                    varIndex.classList.add('completed')
                }
                console.log(varIndex)
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
        // Pinta 29
        mostra();    
        // Limpa o campo input
        clearInput();
        line();
       // lineRemove();
       apagaConteudo();
    });
    
    
} 




