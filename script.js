window.onload = function() {
  
  const list = document.querySelector('#lista-tarefas');
  const addButton = document.querySelector('#criar-tarefa');
  const rmvButton = document.querySelector('#remover-finalizados');

  rmvButton.addEventListener('click', function(event){
    let completed = document.querySelectorAll('.completed');
    if (completed.length === 0){
      alert('Não ha tarefas finalizadas');
    }else{
      for(index = 0; index < completed.length; index += 1){
        completed[index].remove()
      }
    }
  });

  addButton.addEventListener('click', function(event){
    let ls = document.createElement('li');
    let info = document.querySelector('#texto-tarefa');
    ls.innerText = info.value;
    list.appendChild(ls);
    info.value = '';
  });

  list.addEventListener('dblclick', function(event){
    let targetText = event.target
    let TextWithRisk = document.querySelector('.completed')
    console.log(targetText.classList.value)
    if(targetText.classList.value === 'completed selected'){
      targetText.classList.remove('completed');
    }else{
      targetText.classList.add('completed');
    }
  });

  list.addEventListener('click', function(event){
    let targetLi = event.target;
    let taskWithSelected = document.querySelector('.selected');
    if(taskWithSelected === null){
      targetLi.classList.add('selected');
    }else{
      taskWithSelected.classList.remove('selected');
      targetLi.classList.add('selected');
    }
  });

}