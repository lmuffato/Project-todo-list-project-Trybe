function addTasktoList() {
  const button = document.getElementById('criar-tarefa');
  button.addEventListener('click', (e) => {
    const taskList = document.getElementById('lista-tarefas');
    const input = document.getElementById('texto-tarefa');
    if (input.value !== '') {
      const createListItem = document.createElement('li');
      taskList.appendChild(createListItem);
      createListItem.innerHTML = input.value;
      input.value = '';
    }
  });

}

addTasktoList();

function addColorToItems() {
  const listItems = document.getElementsByTagName('ol')[0];
  listItems.addEventListener('click', (e) => {
    const target = e.target;
    if (target.style.backgroundColor === '') {
      listItems.style.backgroundColor = 'rgb(128, 128, 128)';
    }
});
// listItems.addEventListener('click', (e) => {
//     const target = e.target;
//     if (target.style.backgroundColor === 'rgb(128, 128, 128)') {
//           console.log(listItems.style.backgroundColor)
//           listItems.style.backgroundColor = '';
//       }
//   });
}

addColorToItems();