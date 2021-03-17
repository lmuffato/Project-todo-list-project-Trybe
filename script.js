/* Faço questão de deixar registrado que
O aluno Tiago Santos - Turma 10 - Tribo A
me ajudou a raciocinar sobre essa função criarTarefa().
Muito obrigado Tiago Santos - Turma 10 - Tribo A*/

function criarTarefa() {
  const botao = document.getElementById('criar-tarefa');
  botao.addEventListener('click', (evento) => {
    const listaTarefas = document.getElementById('lista-tarefas');
    let criarItem = document.createElement('li');
    criarItem.innerText = document.getElementById('texto-tarefa').value;
    listaTarefas.appendChild(criarItem).innerHTML;
    document.getElementById('texto-tarefa').value;
    document.getElementById('texto-tarefa').value = '';
  });
}
criarTarefa();
