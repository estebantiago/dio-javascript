let pessoa = { 
    nome: 'Tiago Evangelista de Paula',
    idade: '34',
    sexo: 'M',
    //metodo dentro de um objeto 
    descrever: function (){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`)
    } // palavra reservada " this " para acessar o valor
}


pessoa.nome = 'Nayara'
pessoa.idade = '30'

pessoa.descrever(pessoa)


// acessar o valor dinamicamente

const atributo = 'nome'

console.log(pessoa[atributo])

