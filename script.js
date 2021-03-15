const input = document.querySelector('#texto-tarefa');
const createAssignment = document.querySelector('#criar-tarefa');
const todoList = document.querySelector('#lista-tarefas');
const clear = document.querySelector('#remover-finalizados');
const clearAll = document.querySelector('#apaga-tudo');
const clearSelected = document.querySelector('#remover-selecionado');
const save = document.querySelector('#salvar-tarefas');
const up = document.querySelector('#mover-cima')
const down = document.querySelector('#mover-baixo')

createAssignment.addEventListener('click', function criaLi() {
  const li = document.createElement('li');
  li.innerText = input.value;
  todoList.appendChild(li);

  input.value = '';
});

// resolvido com a ajuda da amiga Clarice Oliveira.
todoList.addEventListener('click', (e) => {
  const selectedItem = e.target;
  const liColor = document.querySelectorAll('#lista-tarefas li');
  for (const liC of liColor) {
    liC.classList.remove('gray');
  }
  selectedItem.classList.toggle('gray');
});

todoList.addEventListener('dblclick', (e) => {
  const selectedItem = e.target;
  selectedItem.classList.toggle('completed');
});

// código feito baseado no code Review do Lucas Pedroso.
clear.addEventListener('click', () => {
  const fineshed = document.querySelectorAll('.completed');
  for (const final of fineshed) {
    final.remove();
  }
});

clearAll.addEventListener('click', () => {
  const allCleaned = document.querySelectorAll('#lista-tarefas li');
  for (const final of allCleaned) {
    final.remove();
  }
});

clearSelected.addEventListener('click', () => {
  const fineshed = document.querySelectorAll('.gray');
  for (const final of fineshed) {
    final.remove();
  }
});
// Foi feito baseado no site https://pt.stackoverflow.com/questions/65705/como-%C3%A9-poss%C3%ADvel-trocar-li-de-posi%C3%A7%C3%A3o e no code Review do William Willers
up.addEventListener('click' , () => {
    const selectedItem = todoList.querySelector('.gray');
    if (selectedItem === null) {
      return alert('Selecione um item para mover')
    }
    const swapItem = selectedItem.previousElementSibling;
    if(swapItem === null) {
      return alert('Não é possível mover o item')
    }
    swapItem.parentNode.insertBefore(selectedItem, swapItem);
})



down.addEventListener('click' , () => {
  const selectedItem = todoList.querySelector('.gray');
  if (selectedItem === null) {
    return alert('Selecione um item para mover')
  }
  const swapItem = selectedItem.nextElementSibling;
  if(swapItem === null) {
    return alert('Não é possível mover o item')
  }
  swapItem.parentNode.insertBefore(swapItem, selectedItem);
})


  save.addEventListener('click' , () => {
    const username = document.querySelector('#username').value;
      localStorage.userN = username;
      localStorage.listLi = todoList.innerHTML;
  })

    function getLocalStorageContent() {
      todoList.innerHTML = localStorage.getItem('listLi');
      const userOfLocalStorage = localStorage.getItem('userN');
      const welcome = document.querySelector('#welcome');
      if(userOfLocalStorage === null || userOfLocalStorage === undefined){
        welcome.style.display = 'none'
      } else{
        welcome.style.display = 'block'
        welcome.innerHTML = `Seja bem-vindo ${userOfLocalStorage.getItem('userN')}`
      }
    }
    getLocalStorageContent();