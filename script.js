const buttonCreate = document.querySelector('#criar-tarefa');
const addInput = document.querySelector('#texto-tarefa');
const olItem = document.querySelector('#lista-tarefas');
const buttonErase = document.querySelector('#apaga-tudo');

buttonCreate.addEventListener('click', () => {
  const liItem = document.createElement('li');
  liItem.innerText = addInput.value;
  liItem.addEventListener('click', (event) => {
    const selectedItem = document.querySelector('#selected');
    if (selectedItem) {
      selectedItem.removeAttribute('id');
    }
    const gray = event.target;
    gray.id = 'selected';
  });
  olItem.appendChild(liItem);
  addInput.value = '';

  buttonErase.addEventListener('click', () => {
    olItem.removeChild(liItem);
  });
});
