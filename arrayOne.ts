/* Escreva um programa para criar uma Collection Array de Objetos do tipo string. O programa deverá solicitar ao usuário, que ele digite via teclado 5 cores e deverá adicioná-las individualmente no Array. Em seguida, mostre na tela todas as cores adicionadas e mostre na tela todas as cores adicionadas, ordenadas em ordem crescente. */

import recebe = require('readline-sync')

let cores: Array<string> = new Array<string>()
let cont: number = 1

//recebendo as cores
for (cont = 1; cont < 6; cont = cont + 1) {
    cores[cont] = recebe.question(`Insira a ${cont}- cor: `)
}

//Listar cores
console.log('\nListar cores: ' + cores.join('\n')) //.join('\n') pula linha

//Listar cores ordenadas 
console.log('\nCores ordenadas: \n' + cores.sort().join('\n')) //.join('\n') pula linha

