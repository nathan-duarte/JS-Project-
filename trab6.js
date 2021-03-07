// Continuação de Variáveis Compostas



let num = [5, 8, 2, 9, 3]

valores.sort()

/*

console.log(num)

console.log(num[0])

console.log(num[1])

console.log(num[2])

console.log(num[3])

console.log(num[4])

*/

/*

for (let pos = 0; pos < valores.length; pos++) {

    console.log('Posição: ' + pos)
    console.log('Valor: ' + num)
}

*/


for (let pos in valores) {

    console.log('Posição: ' + pos)
    console.log('Valor: ' + num)
}