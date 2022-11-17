function caculaMedia (nomeAluno, nota1, nota2, nota3) {
    let resultado = (nota1+nota2+nota3)/3
    return console.log('A nota do aluno ', nomeAluno, 'é: ', resultado.toFixed(2))
}
caculaMedia('Vini', 3.6, 10.00, 6.5)

const decideNumero = (numero) => {
    if (numero >= 6) {
        return console.log('O número ', numero, ' é maior que 6')
    } else {
        return console.log('O número ', numero, ' é menor que 6')
    }
}
let numeroDeFora = 15
decideNumero(4)
decideNumero(12)
decideNumero(numeroDeFora)

