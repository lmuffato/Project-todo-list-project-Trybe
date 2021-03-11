let captureOl = document.querySelector('#lista-tarefas');


insertItemTask(); //função disparada ao clicar no botão "adicionar";

function deleteAllSelected() {
  let buttonDeleteAllSelected = document.querySelector('#remover-finalizados');
  buttonDeleteAllSelected.addEventListener('click', function () {
    let captureItemsSelected = captureOl.childNodes;
    for (let i = 0; i < captureItemsSelected.length; i += 1) {
      if (captureItemsSelected[i].className === 'completed') {
        captureOl.removeChild(captureItemsSelected[i]);
      }
    }
  })
};

function deleteAll() {
  let buttonDeleteAll = document.querySelector('#apaga-tudo');
  buttonDeleteAll.addEventListener('click', function () {
    while (captureOl.lastElementChild) {
      captureOl.removeChild(captureOl.lastElementChild);
    }
  });
};

function doubleClickThrough() {
  let captureLastitem = captureOl.lastChild;
  captureLastitem.addEventListener('dblclick', function (event) {
    if (event.target.className === '') {
      event.target.className = 'completed';
    } else if (event.target.className === 'completed') {
      event.target.className = '';
    }
    deleteAllSelected();
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
  let captureInputText = document.querySelector('#texto-tarefa');
  return captureInputText.value;
};

function clearInput() {
  let captureInputText = document.querySelector('#texto-tarefa');
  captureInputText.value = '';
};

function insertItemTask() {
  let captureButton = document.querySelector('#criar-tarefa');
  captureButton.addEventListener('click', function () {
    captureOl = document.querySelector('#lista-tarefas');
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