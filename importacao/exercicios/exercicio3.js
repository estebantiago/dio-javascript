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

const {gets, print} = require('./funcoes-auxiliares3');

const salarioBruto = gets();
const beneficioAdicional = gets();
const aliquota1 = 5;
const aliquota2 = 10;
const aliquota3 = 15;


if(salarioBruto > 0 && salarioBruto < 1100){
   const calculoDesconto =  salarioBruto *(aliquota1 / 100);
    let calcSalrioTransferido = salarioBruto - calculoDesconto + beneficioAdicional;
    print(calcSalrioTransferido)
} 
else if(salarioBruto > 1100 && salarioBruto < 2500){
    const calculoDesconto =  salarioBruto *(aliquota2 / 100);
    let calcSalrioTransferido = salarioBruto - calculoDesconto + beneficioAdicional;
    print(calcSalrioTransferido)
} 
else {
   const calculoDesconto =  salarioBruto *(aliquota3 / 100);
    let calcSalrioTransferido = salarioBruto - calculoDesconto + beneficioAdicional;
    print(calcSalrioTransferido)
}

