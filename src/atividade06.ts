import leia from 'readline-sync'

export default function atividade06(){
 class Produto {
        nome: string;
        preco: number;
    
        constructor(nome: string, preco: number) {
            this.nome = nome;
            this.preco = preco;
        }
    }
    
    function cadastroDeProdutos() {
        var produtos: Produto[] = [];
        var n = parseInt(leia.question("QUANTOS PRODUTOS VOCE DESEJA CADASTRAR?   "));
    
        for (let i = 0; i < n; i++) {
            console.log(`PRODUTO ${i + 1}:`);
            var nome = leia.question("NOME: ");
            var preco = parseFloat(leia.question("PRECO: "));
            var produto = new Produto(nome, preco);
            produtos.push(produto);
            console.log(""); 
        }
    
        console.log("PRODUTOS CADASTRADOS:");
        var totalPreco = 0;
        for (var i = 0; i < produtos.length; i++) {
            console.log(`PRODUTO: ${produtos[i].nome} - PRECO: R$${produtos[i].preco.toFixed(2)}`);
            totalPreco += produtos[i].preco;
        }
    
        const precoMedio = totalPreco / produtos.length;
        console.log(`PRECO MEDIO DOS PRODUTOS: R$${precoMedio.toFixed(2)}`);
    
        console.log(`PRECO TOTAL DOS PRODUTOS: R$${totalPreco.toFixed(2)}`);
    }
    
    cadastroDeProdutos();
    
}
