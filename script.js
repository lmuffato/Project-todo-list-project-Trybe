const ol = document.querySelector("#lista-tarefa");
const inputText = document.getElementById('texto-tarefa');




function newTask() {
  const btnNewTask = document.getElementById('criar-tarefa');
  btnNewTask.addEventListener('click', () => {
    const li = document.createElement('li');
    ol.appendChild(li);
    li.innerText=inputText.value;

  })
}
newTask();