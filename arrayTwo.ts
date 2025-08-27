/* Escreva um programa para criar uma Collection Array do tipo number, inicializada com 10 valores inteiros. O programa deverá solicitar ao usuário, que ele digite via teclado 1 número inteiro e caso ele seja encontrado no Array, exiba na tela a posição deste número na Collection. Caso o número não seja encontrado, o programa deverá exibir na tela a mensagem: O número NN não foi encontrado! */
 
import recebe = require('readline-sync')

let valores: Array<number> = new Array<number>(20, 35, 1, 666, 88, 57, 42, 9, 73, 5)
let encontrar: number 
let posicao: number 

    encontrar = recebe.questionInt('Insira o numero que deseja encontrar: ')
    posicao = valores.indexOf(encontrar)

    if (posicao !== -1) { //muitos métodos de busca como o .indexOf retornam -1 qnd o elemento não é encontrado.
        console.log(`O número ${encontrar} está na posição: ${posicao}.` )
    } else {
        console.log(`O  número ${encontrar} não foi encontrado.`)
    }

