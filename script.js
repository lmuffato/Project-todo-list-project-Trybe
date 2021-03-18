


function criarTarefa () {
    
   var criar = document.getElementById("texto-tarefa");
   var tarefa = criar.value;
   var ol = document.getElementById("lista-tarefas");
   var li = document.createElement("li");
   li.classList.add("listaDinamica");
   var texto = document.createTextNode(tarefa);
   li.appendChild(texto);
   ol.appendChild(li);

}

var btAdicionar = document.getElementById("criar-tarefa");
btAdicionar.addEventListener("click", criarTarefa);


function apagar () {
    var ol = document.getElementById("lista-tarefas");
    let li = document.getElementsByClassName("listaDinamica");
    if(ol.childElementCount > 0) { 
       for (let index = 0; index < li.length; index++) {
           
           ol.removeChild(li[index]);
       }
    }

}

var btnApagar = document.getElementById("apaga-tudo");
btnApagar.addEventListener("click", apagar);