let captureOl = document.getElementById('lista-tarefas');



insertItemTask(); //função disparada ao clicar no botão "adicionar";


function clearSelectedItems() {
  let captureListItems = document.querySelectorAll('.item-task');
  for(let i = 0; i < captureListItems.length; i += 1) {
    captureListItems[i].style.backgroundColor = 'white';
  }
};

function altColorClick() {
  let captureListItems = document.querySelectorAll('.item-task');
  for(let i = 0; i < captureListItems.length; i += 1){
    captureListItems[i].addEventListener('click', function(event) {
      clearSelectedItems();
      event.target.style.backgroundColor = 'rgb(128,128,128)';
    })
  }
};

function captureText() {
  let captureInputText = document.getElementById('texto-tarefa');
  return captureInputText.value;
}

function clearInput() {
  let captureInputText = document.getElementById('texto-tarefa');
  captureInputText.value = '';
}

function insertItemTask() {
  let captureButton = document.getElementById('criar-tarefa');
  captureButton.addEventListener('click', function () {
    let task = captureText();
    if (task == '') {
      alert('Insira uma tarefa para conseguir adicionar.');
    } else {
      let newItem = document.createElement('li');
      newItem.innerHTML = task;
      newItem.className = 'item-task';
      captureOl.appendChild(newItem);
      clearInput();
      altColorClick(); //ao clicar em um item faz o background ficar cinza;
    }
  })
};