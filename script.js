const button = document.querySelector('#criar-tarefa');
const addInput = document.querySelector('#texto-tarefa');
const olItem = document.querySelector('#lista-tarefas');

button.addEventListener('click', () => {
  const liItem = document.createElement('li');
  liItem.innerText = addInput.value;
  liItem.style.marginBottom = '10px';
  liItem.style.fontSize = '15px';
  liItem.style.marginRight = '75%'
  liItem.addEventListener('click', (event) => {
    const selectedItem = document.querySelector('#selected');
    if (selectedItem) {
      selectedItem.removeAttribute('id');
    }
    let gray = event.target;
    gray.id = 'selected';
  });
  olItem.appendChild(liItem);
  addInput.value = '';
});

 


