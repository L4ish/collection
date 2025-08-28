/* Escreva um programa para criar uma Collection Set do tipo number, inicializada com 10 valores inteiros. O programa deverá solicitar ao usuário, que ele digite via teclado 1 número inteiro e caso ele seja encontrado na Collection Set, exiba na tela a mensagem: O Número NN foi encontrado! Caso o número não seja encontrado, o programa deverá exibir na tela a mensagem: O número NN não foi encontrado! */

import recebe = require('readline-sync')

let valores: Set<number> = new Set<number>([51, 92, 17, 666, 0, 9, 3, 48, 79, 8])
let encontrar: number 
let posicao: boolean = true

encontrar = recebe.questionInt('Insira o numero que deseja encontrar: ')
posicao = valores.has(encontrar) // verifica se o número existe ou não

if (posicao !== false){ //posição é comparada com false pois .has é do tipo booleano.
console.log(`O número ${encontrar} foi encontrado.`)
} else {
    console.log(`O número ${encontrar} não foi encontrado.`)
}
