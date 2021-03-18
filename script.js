function criarTarefa() { 
   var criar = document.getElementById("texto-tarefa");
   var tarefa = criar.value;
   var ol = document.getElementById("lista-tarefas");
   var li = document.createElement("li");
   li.classList.add("listaDinamica");
   var texto = document.createTextNode(tarefa);
   li.addEventListener("dblclick", function(e) {
         riscarLista(e);    
   });
   li.addEventListener("click", function(e) {
       coloriLista (e);
   });
   li.appendChild(texto);
   ol.appendChild(li);
   criar.value = "";
}
var btAdicionar = document.getElementById("criar-tarefa");
btAdicionar.addEventListener("click", criarTarefa);

function apagar() {
    var ol = document.getElementById("lista-tarefas");
    if(ol.childElementCount > 0) { 
    ol.innerHTML = "";
    }
}
var btnApagar = document.getElementById("apaga-tudo");
btnApagar.addEventListener("click", apagar);

function riscarLista (li) {
  if(li.target.classList.contains("completed")){
    li.target.classList.remove("completed");
  }
  else{
    li.target.classList.add("completed"); 
  }  
}

function coloriLista (colorir) {
    if(!colorir.target.classList.contains("backgroudLista")){
        colorir.target.classList.add("backgroudLista");
    }    
}
 