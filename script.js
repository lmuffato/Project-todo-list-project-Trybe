window.onload = function() {
  
  const list = document.querySelector('#lista-tarefas');
  const addButton = document.querySelector('#criar-tarefa');

  addButton.addEventListener('click', function(event){
    createLsHtml();
  });

  list.addEventListener('dblclick', function(event){
    
  });

  list.addEventListener('click', function(event){
    let targetLi = event.target;
    let colorWithSelected = document.querySelector('.selected');
    if(colorWithSelected === null){
      targetLi.classList.add('selected');
    }else{
      colorWithSelected.classList.remove('selected');
      targetLi.classList.add('selected');
    }
  });

  function createLsHtml(){
    let ls = document.createElement('li');
    let info = document.querySelector('#texto-tarefa');
    ls.innerText = info.value;
    list.appendChild(ls);
    info.value = '';
  }
}