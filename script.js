const list = document.querySelector('#lista-tarefas');

function addList() {
  const btnForAdd = document.querySelector('#criar-tarefa');
  btnForAdd.addEventListener('click', () => {
    const leList = document.querySelector('#texto-tarefa');
    const li = document.createElement('li');
    li.innerHTML = leList.value;
    list.appendChild(li);
    document.getElementById('texto-tarefa').value = '';
  });
}
addList();

function getGray() {
  list.addEventListener('click', (event) => {
    for (let index = 0; index < list.children.length; index += 1) {
      list.children[index].style.backgroundColor = '';
    }
    event.target.style.backgroundColor = 'rgb(128, 128, 128)';
  });
}
getGray();

/* agradeço a Pollyana Oliveira por me ajudar a sanar o requisito 8 */
