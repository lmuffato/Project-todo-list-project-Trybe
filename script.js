function liCreation (){
    let li = document.querySelector('#criar-tarefa');
    let getOlList = document.querySelector('#lista-tarefas')
    li.addEventListener('click', () => {
        let Lcreate = document.createElement('li')
        let writeText = document.querySelector('#texto-tarefa').value;
        Lcreate.innerHTML = writeText;
        getOlList.appendChild(Lcreate);
        document.getElementById('texto-tarefa').value = '';
    })
}
liCreation()

function grayChange (colorClick){
    colorClick.target.style.backgroundColor = 'rgb(128, 128, 128)';
}

function eraseColor () {
 let button = document.querySelector(".list-class");
 button.addEventListener("click", function() {
    for (index in button) {
    if (button[index].style.backgroundColor == 'rgb(128, 128, 128)') {
        button[index].style.backgroundColor = 'white';
    }
   }
  });
}






