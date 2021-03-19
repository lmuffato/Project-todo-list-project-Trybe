const button = document.querySelector('#criar-tarefa'); // seleciona o botão  
const todoList = document.querySelector('#lista-tarefas'); // seleciona a <ol>
button.addEventListener('click', () => { // cria um evento de botão p/ ligar o texto digitado ao botão 
  const insertText = document.getElementById('texto-tarefa').value; // pega o valor do input 
  document.getElementById('texto-tarefa').value = ''; // passa p/ value um valor vazio
  const textList = document.createElement('li'); // cria o elemento <li>
  textList.innerText = insertText; // vincula o texto da <li> ao input     
  todoList.appendChild(textList); // add  a <li> com o texto do input a <ol> 
  if (todoList.contains(textList)){
    textList.addEventListener('click', () => {
      textList.style.backgroundColor = 'rgb(128,128,128)';
      });
  } else {
    textList.style.backgroundColor = '';
  }
});

