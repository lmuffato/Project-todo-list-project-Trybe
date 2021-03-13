// Clicar no botão adiciona o item à lista
function newTask () {
    let newItem = document.createElement('li');
    let itemValue = document.getElementById('texto-tarefa').value;
    if (itemValue === '') {
        alert('Por favor, digite um valor para adicionar à sua lista.')
    }   else {
        newItem.innerText = itemValue;
        newItem.classList.add('back');
        newItem.style.width = '200px';
        document.getElementById('lista-tarefas').appendChild(newItem);
        //itemValue = '';
        document.getElementById('texto-tarefa').value = '';
    }
    let listItem = document.querySelectorAll('.back')
    for (let index = 0; index < listItem.length; index += 1) {
        listItem[index].addEventListener('click', function(e) {
        getSelected = document.querySelector('.selected');



        getSelected.classList.remove('selected');
          //listItem[index].classList.add('selected');
        //e.target.style.backgroundColor = 'rgb(128,128,128)';
        e.target.classList.add('selected');
      })
    }
}

let btnAddTask = document.getElementById('criar-tarefa');
btnAddTask.addEventListener('click', newTask);

// Clicar no item na lista muda sua cor de fundo
