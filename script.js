  /* Faço questão de deixar registrado que
O aluno Tiago Santos - Turma 10 - Tribo A
me ajudou a raciocinar sobre essa função criarTarefa().
Muito obrigado Tiago Santos - Turma 10 - Tribo A*/

function criarTarefa() {
  const botao = document.getElementById('criar-tarefa');
  botao.addEventListener('click', (evento) => {
    const listaTarefas = document.getElementById('lista-tarefas');
    const criarItem = document.createElement('li');
    criarItem.innerText = document.getElementById('texto-tarefa').value;
    listaTarefas.appendChild(criarItem).innerHTML;
    document.getElementById('texto-tarefa').value;
    document.getElementById('texto-tarefa').value = '';
  });
}
criarTarefa();




function mudarCor(evento) {
  const local = document.querySelector('.selected');
  if (local !== null) 
    local.classList.remove('selected');
  
  if (evento.target.localName === 'li')
    evento.target.classList.add('selected');

}

const ondeProcurar = document.getElementById('lista-tarefas')

ondeProcurar.addEventListener('click', mudarCor);



function duploClick(evento) {
  console.log(evento);
  if (evento.target.localName === 'li') {
    evento.target.classList.toggle('completed');
  }
  
}

ondeProcurar.addEventListener('dblclick', duploClick);