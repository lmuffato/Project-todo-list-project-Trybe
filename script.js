const button = document.querySelector('#criar-tarefa');//seleciona o botão  
const taskList = document.querySelector('#lista-tarefas');//seleciona a <ol>
    button.addEventListener('click', () => { // evento de botão p/ ligar o texto digitado ao botão 
      let insertText = document.getElementById('texto-tarefa').value;//pega o valor do input 
      document.getElementById('texto-tarefa').value = ''; //passa p/ value um valor vazio
      let textList = document.createElement('li');//cria o elemento <li>
      textList.innerText = insertText;//vincula o texto da <li> ao input     
      taskList.appendChild(textList);//add  a <li> a <ol> 
    });

/*const btnTask = document.querySelector('#criar-tarefa');
const tasksList = document.querySelector('#lista-tarefas');
btnTask.addEventListener('click', function () {
  let textTask = document.getElementById('texto-tarefa').value;
  document.getElementById('texto-tarefa').value = '';
  let list = document.createElement('li');
  list.innerText = textTask;
  tasksList.appendChild(list);
}) */
