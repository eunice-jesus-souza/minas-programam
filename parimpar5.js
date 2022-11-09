// Crie um programa que verifique se um determinado número é impar ou par!
// Caso seja ímpar retorne "O número X é ímpar"
// Caso seja par retorne "O número X é ímpar"

// Dica do sucesso: todo número par é divisível por 2.

let number = 4


if(number % 2 === 0){
    console.log(`Este numero é par`)
}else {
    console.log(`Este numero é impar`)
}

function verificarPar (numero) {
    if (numero % 2 === 0) return `${numero} é par`
    else return`${numero} é impar`
}

console.log(verificarPar(2))
console.log(verificarPar(5))
console.log(verificarPar(34))
console.log(verificarPar(99))



