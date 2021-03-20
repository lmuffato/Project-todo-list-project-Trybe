const button = document.querySelector('#criar-tarefa'); // seleciona o botão
const todoList = document.querySelector('#lista-tarefas'); // seleciona a <ol>

function taskList(){
button.addEventListener('click', () => { // cria um evento de botão p/ ligar o texto digitado ao botão
  const insertText = document.getElementById('texto-tarefa').value; // pega o valor do input
  document.getElementById('texto-tarefa').value = '';
  const textList = document.createElement('li'); // cria o elemento <li>
  textList.innerText = insertText; // vincula o texto da <li> ao input
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


 
 
/*taskList();
function changeColor(){
const textList = document.querySelectorAll('li');
textList.addEventListener('click', () => {
textList.style.backgroundColor = 'rgb (255,255,255)';
});
}
changeColor();*/