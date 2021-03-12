const buttonCreate = document.querySelector('#criar-tarefa');
const addInput = document.querySelector('#texto-tarefa');
const olItem = document.querySelector('#lista-tarefas');
const buttonErase = document.querySelector('#apaga-tudo');
const buttonEraseCompleted = document.querySelector('#remover-finalizados');
const buttonEraseSelected = document.querySelector('#remover-selecionado');

window.onload = function () {
  addInput.focus();
};

buttonCreate.addEventListener('click', () => {
  const liItem = document.createElement('li');
  liItem.innerText = addInput.value;
  liItem.addEventListener('click', (event) => {
    const selectedItem = document.querySelector('#selected');
    if (selectedItem) {
      selectedItem.removeAttribute('id');
      addInput.focus();
    }
    const gray = event.target;
    gray.id = 'selected';
    addInput.focus();
  });
  olItem.appendChild(liItem);
  addInput.value = '';
  liItem.addEventListener('dblclick', (event) => {
    const item = event.target;
    if (item.className === 'completed') {
      item.className = '';
      item.removeAttribute('id');
      addInput.focus();
    } else {
      item.removeAttribute('id');
      item.className = 'completed';
      addInput.focus();
    }
  });
  buttonErase.addEventListener('click', () => {
    olItem.removeChild(liItem);
  });
  buttonEraseCompleted.addEventListener('click', () => {
    const list = document.querySelectorAll('#lista-tarefas li');
    for (let index = 0; index < list.length; index += 1) {
      if (list[index].className === 'completed') {
        olItem.removeChild(list[index]);
      }
    }
  });
  buttonEraseSelected.addEventListener('click', () => {
    const list = document.getElementById('selected');
    olItem.removeChild(list);
  });
  addInput.focus();
});
