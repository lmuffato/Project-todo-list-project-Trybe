window.onload = function (){
    
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
        document.getElementById('texto-tarefa').value = '';
    });

    function mouseDown() {
        document.getElementsByTagName("li").style.color = "green";
      }
      

    /* let listClick = document.getElementsByTagName('li');
    for (let index = 0; index < cont.length; index += 1) {
        let clickOnList = listClick[index]
        clickOnList.addEventListener('click', function()
        {
           clickOnList.style.backgroundColor = 'rgb(128, 128, 128)';
        })    
    } */

} 




