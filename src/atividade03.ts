import leia from 'readline-sync'

export default function atividade03() {
var usuarioEscolhe = leia.question("ESCOLHA: PEDRA, PAPEL OU TESOURA: ")?.trim();

if (usuarioEscolhe !== 'Pedra' && usuarioEscolhe !== 'Papel' && usuarioEscolhe !== 'Tesoura') {
  console.log("ESCOLHA INVALIDA. TENTE NOVAMENTE.");
} else {
  const opcoes = ['Pedra', 'Papel', 'Tesoura'];
  const escolhaComputador = opcoes[Math.floor(Math.random() * 3)];

  console.log(`VOCE ESCOLHEU: ${usuarioEscolhe}`);
  console.log(`O PC ESCOLHEU: ${escolhaComputador}`);

  if (usuarioEscolhe === escolhaComputador) {
    console.log('PARTIDA EMPATADA');
  } else if (
    (usuarioEscolhe === 'Pedra' && escolhaComputador === 'Tesoura') ||
    (usuarioEscolhe === 'Tesoura' && escolhaComputador === 'Papel') ||
    (usuarioEscolhe === 'Papel' && escolhaComputador === 'Pedra')
  ) {
    console.log('VOCE VENCEU!');
  } else {
    console.log('VOCE PERDEU');
  }
}

}