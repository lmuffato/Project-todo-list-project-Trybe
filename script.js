const taskBtn = document.getElementById('criar-tarefa');
const inputPlace = document.getElementById('texto-tarefa');
const listTask = document.getElementById('lista-tarefas');
// fontes https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/values - https://www.youtube.com/watch?v=JBdyASuhq1c além de olhar muuuuitos projetos de colegas

function addTask() {
  taskBtn.addEventListener('click', () => {
    const li = document.createElement('li');
    li.innerText = inputPlace.value; 
    listTask.appendChild(li);
    inputPlace.value = '';
  });
}

addTask();

function grayLi() {
  listTask.addEventListener('click', (event) => {
    for (let index; index < listTask.children[index]; index += 0) {
      listTask.children[index].style.background = '';
    }
    event.target.style.background = 'rgb(128, 128, 128)';
  });
}

grayLi();