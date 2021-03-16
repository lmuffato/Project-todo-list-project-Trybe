window.onload = function() {
  
  const list = document.querySelector('#lista-tarefas');
  const addButton = document.querySelector('#criar-tarefa');

  addButton.addEventListener('click', function(event){
    console.log('dbclick')
    createLsHtml();
  });

  function createLsHtml(){
    let ls = document.createElement('li');
    let info = document.querySelector('#texto-tarefa');
    ls.innerText = info.value;
    list.appendChild(ls)
    info.value = ''
  }
}