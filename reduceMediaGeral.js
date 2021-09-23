const salaJs = [7, 8, 8, 7, 10, 6.5, 4, 10, 7]
const salaJava = [6, 5, 8, 9, 5, 6]
const salaPython = [7, 3.5, 8, 9.5]

function mediaSala(notasDaSala) {
    const somaDasNotas = notasDaSala.reduce((acum, atual) => 
    atual + acum,0)
    return somaDasNotas/notasDaSala.length
}
//console.log(`A Media a sala de JS é ${mediaSala(salaJs)}`)
//console.log(`A Media a sala de Java é ${mediaSala(salaJava)}`)
//console.log(`A Media a sala de Python é ${mediaSala(salaPython)}`)

const notas = [10, 6.5, 8, 7]

function media(notaFinal) {
    const soma = notaFinal.reduce((acum,atual) =>
    atual + acum,0)
    return soma/notaFinal.length
}
const mediafinal = media(notas)
const mediafinalAredondada = parseFloat(mediafinal.toFixed(1));


console.log(mediafinal)
console.log(mediafinalAredondada)