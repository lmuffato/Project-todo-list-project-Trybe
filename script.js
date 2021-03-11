// Variavél Global;
const listPai = document.querySelector('#lista-tarefas');

// Requisito 5 e 6;
function clickButton() {
  const button = document.getElementById('criar-tarefa');
  button.addEventListener('click', () => {
    const input = document.querySelector('#texto-tarefa');
    let list;
    if (input.value === '') {
      list = '';
    } else {
      list = document.createElement('li');
      listPai.appendChild(list).innerText = input.value;
      input.value = '';
    }
  });
}
clickButton();
// Requisito  7;
function clickItemList() {
  listPai.addEventListener('click', () => {
    const list = document.querySelectorAll('li');
    for (let index = 0; index < list.length; index += 1) {
      const color = 'rgb(128, 128, 128)';
      list[index].style.backgroundColor = color;
    }
  });
}
clickItemList();

// Requisito 8;
function nextItemList() {
  listPai.addEventListener('click', (e) => {
    const color = e.target;
    const li = document.querySelectorAll('li');
    for (let index = 0; index < li.length; index += 1) {
      li[index].style.backgroundColor = document.body.style.backgroundColor;
      if (color.localName === 'li') {
        color.style.backgroundColor = 'rgb(128, 128, 128)';
      }
    }
  });
}
nextItemList();

// Requisito 9 ;
function doubleClick() {
  listPai.addEventListener('dblclick', () => {
    const li = document.querySelectorAll('li');
    const decoration = 'line-through solid rgb(0, 0, 0)';
    for (let index = 0; index < li.length; index += 1) {
      li[index].classList.add('completed');
      if (li[index].style.textDecoration === decoration) {
        li[index].style.textDecoration = 'none';
      } else {
        li[index].style.textDecoration = decoration;
      }
    }
  });
}
doubleClick();
