import leia from 'readline-sync'

export default function atividade04() {  
    const numeroCorreto = Math.floor(Math.random() * 100) + 1;
    var  tentativas = 0;
    
    
    console.log("TENTE ADIVINHAR O NUMERO ENTRE 1 E 100");
     
    while (true) {
        var  chute = leia.questionInt("QUAL SEU CHUTE ? ");
        tentativas++;

           if (chute < numeroCorreto) {
            console.log("O NUMERO CORRETO E MAIOR");
        } else if (chute > numeroCorreto) {
            console.log("O NUMERO CORRETO E MENOR");
        } else {
            console.log(`VOCE ACERTOU O NUMERO ${numeroCorreto} EM ${tentativas} TENTATIVAS.`);
            break;
        }
    }
    
}