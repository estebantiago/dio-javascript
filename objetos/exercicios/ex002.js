/* 
Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos peso, nome  e altura.
As pessoas devem ter a capacidade de dizer o seu IMC (IMC = peso / (altura * altura) )
Instancie uma pessoa chamada José que tenha 70 kg e 1.75 de altura e peça para José que diga o seu IMC .
 */

class Pessoa {
    nome;
    peso;
    altura;
   
    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
        
    }
    calcularImc(){
        
        return this.peso / (this.altura * this.altura)
    }
    
    descrever(){
        const imc = this.calcularImc();
        console.log(`Meu nome é ${this.nome} e meu imc é ${imc.toFixed(2)} `)
    }
}

const pessoa1 = new Pessoa('José', 70, 1.75)
pessoa1.descrever()



