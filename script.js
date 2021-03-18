const ol = document.querySelector("#lista-tarefas");
const inputText = document.getElementById('texto-tarefa');




function newTask() {
  const btnNewTask = document.getElementById('criar-tarefa');
  btnNewTask.addEventListener('click', () => {
    const li = document.createElement('li');
    ol.appendChild(li);
    li.innerText = inputText.value;

    li.addEventListener('click', () => {
      const lis = document.querySelectorAll('li');
      for (index = 0; index < lis.length; index += 1) {
        if (lis[index].style.backgroundColor = 'rgb(128, 128, 128)') {
          lis[index].style.backgroundColor = '';
        }
      }
      li.style.backgroundColor = 'rgb(128, 128, 128)';
    });

    li.addEventListener('dblclick', () => {
      li.classList.toggle('completed');
    });
  })
}
newTask();