
/* 
Faça um programa que calcule e imprima o valor a ser transferido para um funcionario.
 Para realizar o calculo receba o valor bruto do salario e o adicional dos beneficios 
 
 O salário a ser transferido é calculado da seguinte maneira: 

 valor bruto do salario  - percentual de imposto mediante a faixa salarial + adicional dos beneficios.

 para calcular o percentual de imposto segue as aliquotas:

 - De R$0.00 a R$1.100,00 = 5.00%
 - De R$1.100,01 a R$2.500,00 = 10.00%
 - Maior que  R$2.500,00 = 15.00%

 Exemplos:

  Entrada : 
  2000
  250

  Saída :

  2050
 
 */

const {gets, print} = require('./func-aux4');

const  salarioBruto = gets();
const valorBeneficios = gets();


function calcularPorcentagem(salario, porcentagem){
   return salario * (porcentagem / 100);
}

function pegarAliquota(salario){
    if(salario > 0 && salario <= 1100){
        return 5;
    } else if (salario > 1100 && salario < 2500){
        return 10;
    } else {
        return 15;
    }
}

const aliquotaImposto = pegarAliquota(salarioBruto)
const valorImposto = calcularPorcentagem(salarioBruto, aliquotaImposto)

let valorAtransferir = salarioBruto - valorImposto + valorBeneficios;
print(valorAtransferir)


