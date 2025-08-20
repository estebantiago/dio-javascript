// CLASSES 

class Pessoa {
    nome;
    idade;
    anoNascimento;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        this.anoNascimento = 2025 - idade;

    }
    descrever(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

function compararPessoas (p1, p2){
    if(p1.idade > p2.idade){
        console.log(`${p1.nome} é mais velho que ${p2.nome}`)
    } else if (p1.idade < p2.idade){
        console.log(`${p2.nome} é mais velho que ${p2.nome}`)
    } else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`)
    }
}

const pessoa1 = new Pessoa('Tiago', 34);
const pessoa2 = new Pessoa('Nayara', 30);

compararPessoas(pessoa1, pessoa2)




