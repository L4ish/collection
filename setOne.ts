/* Escreva um programa para criar uma Collection Set do tipo number. O programa deverá solicitar ao usuário, que ele digite via teclado 10 valores inteiros não repetidos e adicione-os individualmente na Collection Set. Em seguida, mostre na tela todos os elementos da Collection Set. */

import recebe = require('readline-sync')

let valores: Set<number> = new Set<number>() //set não aceita valores repetidos

let cont: number = 1

for (cont = 1; cont < 11; cont = cont + 1) {
    valores.add(recebe.questionInt(`Insira o ${cont}- numero: `)) 
    //no set usa-se .add em vez de valores[]
}

console.log('Todos elementos: ', valores)