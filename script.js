let captureOl = document.getElementById('lista-tarefas');



insertItemTask(); //função disparada ao clicar no botão "adicionar";

function captureText() {
  let captureInputText = document.getElementById('texto-tarefa');
  return captureInputText.value;
}

function clearInput() {
  let captureInputText = document.getElementById('texto-tarefa');
  captureInputText.value = '';
}

function insertItemTask() {
  let captureButton = document.getElementById('criar-tarefa');
  captureButton.addEventListener('click', function () {
    let task = captureText();
    if (task == '') {
      alert('Insira uma tarefa para conseguir adicionar.');
    } else {
      let newItem = document.createElement('li');
      newItem.innerHTML = task;
      captureOl.appendChild(newItem);
      clearInput();
    }
  })
};