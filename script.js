const button = document.querySelector('#criar-tarefa'); 
const todoList = document.querySelector('#lista-tarefas'); 

function taskList(){
button.addEventListener('click', () => { 
  const insertText = document.getElementById('texto-tarefa').value; 
  document.getElementById('texto-tarefa').value = '';
  const textList = document.createElement('li'); 
  textList.innerText = insertText; 
  todoList.appendChild(textList); 
});
}
taskList();

function changeColor(){ 
  todoList.addEventListener('click', (e) => {
    const itemList = e.target;
    const liClass = document.getElementsByClassName('item')[0];
    if(liClass !== undefined){
      liClass.classList.remove('item');
    }
    itemList.classList.add('item');
  });
}
changeColor();

function completeTask(){
  todoList.addEventListener('dblclick', (e) =>{
  e.target.classList.toggle('completed');
});
}
completeTask();


 
 
