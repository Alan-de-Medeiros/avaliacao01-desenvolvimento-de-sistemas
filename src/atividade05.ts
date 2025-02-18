import leia from 'readline-sync'

export default function atividade05() {
    class Jogador {
        nome: string;
        gols: number;
        passesCertos: number;
        passesErrados: number;
        pontos: number;
    
        constructor(nome: string, gols: number, passesCertos: number, passesErrados: number) {
            this.nome = nome;
            this.gols = gols;
            this.passesCertos = passesCertos;
            this.passesErrados = passesErrados;
            this.calcularPontuacao();
        }
    
        calcularPontuacao(): void {
            this.pontos = (this.gols * 50) + (this.passesCertos * 10) + (this.passesErrados * -5);
        }

        avaliarDesempenho(): string {
            if (this.pontos < 50) {
                return "PESSIMA PARTIDA.";
            } else if (this.pontos <= 100) {
                return "PARTIDA RUIM.";
            } else if (this.pontos <= 150) {
                return "FEZ O BASICO.";
            } else if (this.pontos <= 200) {
                return "FOI BEM NA PARTIDA.";
            } else {
                return "JOGOU DEMAIS";
            }
        }
    }

    function main(): void {
        const jogadores: Jogador[] = [];
        let melhorJogador: Jogador | null = null;
        let melhorPontuacao = -1;

        for (let i = 0; i < 10; i++) {
            console.log(`JOGADOR ${i + 1}:`);
            const nome = leia.question("NOME: ");
            const gols = parseInt(leia.question("QUANTIDADE DE GOLS: "));
            const passesCertos = parseInt(leia.question("QUANTIDADE DE PASSES CERTOS: "));
            const passesErrados = parseInt(leia.question("QUANTIDADE DE PASSES ERRADOS: "));
    
            const jogador = new Jogador(nome, gols, passesCertos, passesErrados);
            jogadores.push(jogador);
    
            if (jogador.pontos > melhorPontuacao) {
                melhorPontuacao = jogador.pontos;
                melhorJogador = jogador;
            }
    
            console.log(`${jogador.nome} - ${jogador.pontos} pontos - ${jogador.avaliarDesempenho()}\n`);
        }
    
        if (melhorJogador !== null) {
            console.log(`MELHOR JOGADOR: ${melhorJogador.nome} COM ${melhorJogador.pontos} PONTOS.`);
        }
    }
    
    main();
}
