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
    for(let index =0;index<tasks.length;index+=1){
        if(e.target==tasks[index]){
            tasks[index].style.backgroundColor="rgb(128,128,128)";
            
            if(e.target.className=="selected"){
                tasks[index].style.backgroundColor="initial";
                tasks[index].classList.remove("selected");
            }else{
                tasks[index].classList.add("selected");
            }
        }
    }
}
// if(taskList.children.length > 0 ){
// taskList.children[0].addEventListener('click',taskSelected)
// function taskSelected(e){
//     let event = e
//     event.target.
// }
// }