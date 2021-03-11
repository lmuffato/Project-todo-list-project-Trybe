let taskList = document.getElementById("lista-tarefas");
let tasks = document.getElementsByTagName('li');
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
document.body.addEventListener("click",ElementSelected);
function ElementSelected(e){
    console.log(e.target.className);
    let hasAnotherSelect = classRepeatChecker(tasks);
    let hasTask=false;
    console.log(hasAnotherSelect);
    for(let index=0;index<tasks.length;index+=1){
    if(e.target==tasks[index]&&hasAnotherSelect==false){
        tasks[index].classList.add("selected") 
    }
    else if(e.target==tasks[index]&&hasAnotherSelect==true){
        let x = document.getElementsByClassName("selected");
        for (let ondex = 0; ondex < x.length; ondex++) {
            x[ondex].classList.remove("selected");           
        }
        tasks[index].classList.add("selected");
        }
    }
 }

function classRepeatChecker(array){
    let counter=0;
    for(let index = 0;index<array.length;index+=1){
        if(array[index].className=="selected"){
            counter+=1;
        }
    }
    if(counter>0){
        return true
    }else{
        return false
    }
}
