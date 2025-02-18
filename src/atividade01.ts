import leia from 'readline-sync'

export default function atividade01() {
  var nota = leia.questionInt("ESCREVA A NOTA DE 0 A 100: ");

  if (nota < 0 || nota > 100){
    console.log("NOTA INVALIDA");
  }
  if (nota >= 90 && nota <= 100) {
    console.log("TIROU UMA NOTA (A)");
  } if (nota >= 80 && nota <= 89) {
    console.log("TIROU UMA NOTA (B)");
  } if (nota >= 70 && nota <= 79) {
    console.log("TIROU UMA NOTA (C)");
  } if (nota >= 60 && nota <= 69) {
    console.log("TIROU UMA NOTA (D)");
  } if (nota < 60) {
    console.log("TIROU UMA NOTA (F)");
  } 

}
