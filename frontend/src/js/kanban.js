function avancar(botao) {
  const card = botao.closest('.card');
  const statusAtual = card.dataset.status;

  const ordem = ['recebido', 'preparando', 'pronto', 'entregue'];
  let indexAtual = ordem.indexOf(statusAtual);
  let proximoStatus = ordem[indexAtual + 1];

  if (proximoStatus) {
    moverCard(card, proximoStatus);
  }
}

function voltar(botao) {
  const card = botao.closest('.card');
  const statusAtual = card.dataset.status;

  const ordem = ['recebido', 'preparando', 'pronto', 'entregue'];
  let indexAtual = ordem.indexOf(statusAtual);
  let statusAnterior = ordem[indexAtual - 1];

  if (statusAnterior) {
    moverCard(card, statusAnterior);
  }
}

function moverCard(card, novoStatus) {
  const coluna = document.getElementById(novoStatus);
  card.dataset.status = novoStatus;
  coluna.appendChild(card);

  atualizarBotoes(card, novoStatus);
}

function atualizarBotoes(card, status) {
  const botoesDiv = card.querySelector('.botoes');
  botoesDiv.innerHTML = ''; // Limpa os botões

  const ordem = ['recebido', 'preparando', 'pronto', 'entregue'];
  let indexAtual = ordem.indexOf(status);

  if (indexAtual > 0) {
    const btnVoltar = document.createElement('button');
    btnVoltar.textContent = 'Voltar';
    btnVoltar.onclick = function () {
      voltar(btnVoltar);
    };
    botoesDiv.appendChild(btnVoltar);
  }

  if (indexAtual < ordem.length - 1) {
    const btnAvancar = document.createElement('button');
    btnAvancar.textContent = 'Avançar';
    btnAvancar.onclick = function () {
      avancar(btnAvancar);
    };
    botoesDiv.appendChild(btnAvancar);
  }
}
