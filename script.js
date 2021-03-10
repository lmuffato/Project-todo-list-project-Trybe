let captureOl = null;


insertItemTask(); //função disparada ao clicar no botão "adicionar";

function deleteAll() {
  let buttonDeleteAll = document.getElementById('apaga-tudo');
  buttonDeleteAll.addEventListener('click', function() {
    while(captureOl.lastElementChild) {
      captureOl.removeChild(captureOl.lastElementChild);
    }
  });
};

function doubleClickThrough() {
  let captureLastitem = captureOl.lastChild;
  captureLastitem.addEventListener('dblclick', function (event) {
    console.log('stanrley');
    if (event.target.className === '') {
      event.target.className = 'completed';
    } else if (event.target.className === 'completed') {
      event.target.className = '';
      console.log('class vazia');
    }
  });
};

function clearSelectedItems() {
  let captureListItems = captureOl.childNodes;
  for (let i = 0; i < captureListItems.length; i += 1) {
    captureListItems[i].style.backgroundColor = 'white';
  }
};

function altColorClick() {
  let captureListItems = captureOl.childNodes;
  for (let i = 0; i < captureListItems.length; i += 1) {
    captureListItems[i].addEventListener('click', function (event) {
      clearSelectedItems();
      event.target.style.backgroundColor = 'rgb(128,128,128)';
    })
  }
};

function captureText() {
  let captureInputText = document.getElementById('texto-tarefa');
  return captureInputText.value;
};

function clearInput() {
  let captureInputText = document.getElementById('texto-tarefa');
  captureInputText.value = '';
};

function insertItemTask() {
  let captureButton = document.getElementById('criar-tarefa');
  captureButton.addEventListener('click', function () {
    captureOl = document.getElementById('lista-tarefas');
    let task = captureText();
    if (task == '') {
      alert('Insira uma tarefa para conseguir adicionar.');
    } else {
      let newItem = document.createElement('li');
      newItem.innerHTML = task;
      captureOl.appendChild(newItem);
      clearInput();
      altColorClick(); //ao clicar em um item faz o background ficar cinza;
      //altListItems();
      doubleClickThrough(); //ao clicar 2x no item o grifa.
      deleteAll();
    }

  })

};