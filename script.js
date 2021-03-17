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

function grayChange (){
    let liClass = document.querySelector('ol');
    liClass.addEventListener("click", function(gray){
    let selectedLi = document.querySelector(".selected")
        if (selectedLi != null){
            document.querySelector(".selected").classList.remove("selected")
        }
        gray.target.classList.add("selected")
  })
}

grayChange();


/*function grayChange() {
    let olList = document.querySelector('ol')
    olList.addEventListener('click', (gray) => {
      const targetOl = gray.target;
      const selectedLi = document.querySelector('.selected');
      if (selectedLi !== null) {
        selectedLi.classList.remove('selected');
      }
      targetOl.classList.add('selected');
    });
  }
grayChange()
*/