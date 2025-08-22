

function calcularImc(peso, altura) {
    return peso / Math.pow(altura, 2)

}

function classificar(imc) {
    if (imc < 18.5) {
        return 'Abaixo do Peso'
    } else if (imc >= 18.5 && imc < 25) {
        return 'Peso Normal'
    } else if (imc >= 25 && imc < 30) {
        return 'Acima do Peso'
    } else {
        return ' Obesidade '
    }

}
function main() {
    let peso = 96
    let altura = 1.80

    const imc = calcularImc(peso, altura)
    console.log(classificar(imc))
}


main()