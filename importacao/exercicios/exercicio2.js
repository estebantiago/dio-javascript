const { gets, print } = require('./funcoes-auxiliares2');

const n = gets(); // atribuindo gets() a variavel N

let maiorNumPar = 0; 
let menorNumImpar = 0;

for(let i = 0; i < n; i++){ 
    const numero = gets(); 

    if(numero % 2 === 0){

        if(maiorNumPar === 0 || numero > maiorNumPar){ 
            maiorNumPar = numero; 
        } 
    } else { 
        if( menorNumImpar === 0 || numero < menorNumImpar){
            menorNumImpar = numero; 
        }

    }
}   

print(`Maior número par: ${maiorNumPar}`);
print(`Menor número Impar: ${menorNumImpar}`);