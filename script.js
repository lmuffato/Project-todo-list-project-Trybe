let addTaskButton =  document.getElementById("criar-tarefa");
    addTaskButton.addEventListener("click",addTask);
function addTask(){
    let listContent=document.getElementById("texto-tarefa");
    let list= document.getElementById("lista-tarefas")
    if(listContent.value==""){
        alert("Favor, preencher a caixa de texto!")
    }else{
    let newListItem=document.createElement('li');
    newListItem.innerText=listContent.value;
    list.appendChild(newListItem);
    listContent.value="";
    }
}