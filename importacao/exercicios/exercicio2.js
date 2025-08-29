const { gets, print } = require('./funcoes-auxiliares2');

const n = gets(); // atribuindo gets() a variavel N

let maiorNumPar = null; // Maior número par inicia com 0
let menorNumImpar = null; // Menor número impar inicia com 0 

for(let i = 0; i < n; i++){ // enquanto i recebe 0; i for menor que n(gets()); i incrementa

    const numero = gets(); // numero recebe gets()

    if(numero % 2 === 0){ // se o número(gets()) for par 

        if(maiorNumPar === null || numero > maiorNumPar){ // Se numero(gets()) for maior que o maior numero par 
            maiorNumPar = numero; // Maior numero par recebe numero(gets())
        } 
    } else { // Se não 
        if( menorNumImpar === null || numero < menorNumImpar){ // Se o menor número impar for igual a 0
            menorNumImpar = numero; // O menor número impar recebe numero(gets())
        }

    }
}   

print(`Maior número par: ${maiorNumPar}`);
print(`Menor número Impar: ${menorNumImpar}`);