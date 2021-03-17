function inputElement(){
    const tagInput = document.querySelector('#texto-tarefa');
    const tagLi = document.createElement('li');
    tagLi.innerText = tagInput.value;
    tagLi.classList.add('elemento')
    const tagOl = document.querySelector('#lista-tarefas');
    tagOl.appendChild(tagLi);
    tagInput.value = null;
}

function createAssignment() {
    const button = document.querySelector('#criar-tarefa');
    button.addEventListener('click', inputElement) 
}

createAssignment();

function selectBackgroundColor (event) {
    const clickAct = event.target;
    clickAct.style.backgroundColor = 'rgb(128, 128, 128)'
  }
  
  function changeBackgroundColor () {
    const olElement = document.getElementById('lista-tarefas');
    olElement.addEventListener('click',selectBackgroundColor);
  }
  changeBackgroundColor();