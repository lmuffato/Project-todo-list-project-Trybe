const taskList = document.getElementById("lista-tarefas");
const tasks = document.getElementsByTagName('li');
const killAllListButton = document.getElementById('apaga-tudo');
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

document.body.addEventListener("click",clickSelected);
document.body.addEventListener("dblclick",doubleClickSelected)
killAllListButton.addEventListener("click",killAll)
function clickSelected(e){
    let hasAnotherSelect = classRepeatChecker(tasks);
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
        if(array[index].className.includes("selected")==true){
            counter+=1;
        }
    }
    if(counter>0){
        return true
    }else{
        return false
    }
}

function doubleClickSelected(e) {
    for(let index=0;index<tasks.length;index+=1){
        if(e.target==tasks[index]){
            if(tasks[index].className.includes("completed")!=true){
            tasks[index].classList.add("completed");
            }
            else{
                tasks[index].classList.remove("completed");
            }
        }
    }
}

function killAll() {
    let lastOne;
    while(taskList.children.length != 0){
        lastOne = taskList.lastChild;
        taskList.removeChild(lastOne);
    }
}