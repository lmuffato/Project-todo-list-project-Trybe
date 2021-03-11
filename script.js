// Requisito 2
const paragraph = document.getElementById('funcionamento');
paragraph.innerText = 'Clique duas vezes em um item para marcá-lo como completo';

// Requisito 5
const taskList = document.getElementById('lista-tarefas');
const buttonInsertItem = document.getElementById('criar-tarefa');
buttonInsertItem.innerText = 'Inserir';
const inputList = document.getElementById('texto-tarefa');

buttonInsertItem.addEventListener('click', () => {
  const listItem = document.createElement('li');
  listItem.innerText = inputList.value;
  taskList.appendChild(listItem);
  inputList.value = '';
});

// requisito 7
function selectItem() {
  const listClick = document.getElementsByTagName('ol')[0];
  const listItens = document.getElementsByTagName('li');
  listClick.addEventListener('click', (event) => {
    const clickEvent = event.target;
    for (let index = 0; index < listItens.length; index += 1) {
      listItens[index].style.backgroundColor = document.body.style.backgroundColor;
      if (clickEvent.localName === 'li') {
        clickEvent.style.backgroundColor = 'rgb(128, 128, 128)';
      }
    }
  });
}
selectItem();
