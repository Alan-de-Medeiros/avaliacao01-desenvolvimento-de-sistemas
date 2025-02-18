import leia from 'readline-sync'

export default function atividade02() {
    var idade = leia.questionInt("ESCREVA A IDADE DA PESSOA: ");

    if (idade < 12) {
        console.log("ESSA PESSOA E UMA CRIANCA");
    }
    if (idade >= 12 && idade <= 17) {
        console.log("ESSA PESSOA E UM ADOLESCENTE");
    } if (idade >= 18 && idade <= 59) {
        console.log("ESSA PESSOA E UM ADULTO/A");
    } if (idade > 60) {
        console.log("ESSA PESSOA E UM IDOSO/A");
    }
}