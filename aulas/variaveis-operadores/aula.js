/* Faça um programa para calcular o valor de uma viagem

Você terá 4 variáveis. Sendo elas:
1 - Preço do Combustível
2 - Gasto médio de combustível do carro por KM
3 - Distância em KM da viagem

*/ 

const  precoCombustivel = 5.70;
const gastomedioKm = 10;
const distanciaKm = 300;

const litrosNecessarios = distanciaKm / gastomedioKm;
const resultado = litrosNecessarios * precoCombustivel;

console.log(`O gasto médio para essa viagem é R$ ${resultado.toFixed(2)} `);