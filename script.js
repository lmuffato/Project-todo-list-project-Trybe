// recupera o botão e a caixa de texto
let button = document.querySelector('#criar-tarefa');
let boxText = document.querySelector('#texto-tarefa');

// botao adiciona nova tarefa
button.addEventListener('click', function () {
  let item = document.createElement('li');
  document.querySelector('#lista-tarefas').appendChild(item);
  item.innerText = boxText.value;
  boxText.value = '';
  changeColor (item);
});

// função muda a cor de fundo da tarefa ao ser clicada
function changeColor (itemList) {
  itemList.addEventListener('click', function (e) {
    e.target.style.backgroundColor = 'rgb(128, 128, 128)';
  })
}