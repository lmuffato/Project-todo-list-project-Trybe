function clickButton() {
  const button = document.getElementById('criar-tarefa');
  button.addEventListener('click', () => {
    const input = document.querySelector('#texto-tarefa');
    let list;
    if (input.value === '') {
      list = '';
    } else {
      list = document.createElement('li');
      document.querySelector('#lista-tarefas').appendChild(list).innerText = input.value;
      input.value = '';
    }
  });
}
clickButton();

function clickItemList() {
  const listPai = document.querySelectorAll('#lista-tarefas')[0];
  listPai.addEventListener('click', () => {
    const list = document.querySelectorAll('li');
    for (let index = 0; index < list.length; index += 1) {
      const color = 'rgb(128, 128, 128)';
      if (list[index].style.backgroundColor === color) {
        list[index].style.backgroundColor = 'white';
      } else {
        list[index].style.backgroundColor = color;
      }
    }
  });
}
clickItemList();
