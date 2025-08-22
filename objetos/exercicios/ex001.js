/* Crie uma classe para reprensentar carros.
Os carros possuem uma marca, uma cor e um gasto médio de combustível por KM rodado.
Crie um método que dado a quantidade de Km e o preço do combustível nos de o valor gasto em reais para realizar este percurso 
*/

class Carro {

    marca;
    cor;
    gastoMedio;

    constructor(marca, cor, gastoMedio) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedio = gastoMedio;
    }

    calcular(distancia, precoComb) {
        let mediaCons = distancia / this.gastoMedio;
        let valorGasto = mediaCons * precoComb;

        return valorGasto;
    }
    
    descrever() {
        console.log(`Marca: ${this.marca} Cor:  ${this.cor} Gasto médio ${this.gastoMedio}`)
    }

}



let carro1 = new Carro('Fiat', 'preto', 10)
carro1.descrever()

let gasto = carro1.calcular(500, 5.70);

console.log(`Você vai gastar ${gasto.toFixed(2)}`);






