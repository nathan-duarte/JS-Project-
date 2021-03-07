// Variáveis Compostas

let num = [5, 12, 30, 2, 22]

num.sort()

num.push(1)

console.log(num)

console.log('Vetor: ' + num.length)

console.log('Primeiro valor do vetor: ' + num[0])

let pos = num.indexOf(8)

if (pos == -1) {

    console.log('O valor não foi encontrado!')

} else {

    console.log('O valor está na posição ' + pos)
}