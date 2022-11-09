// Uma comerciante comprou alguns produtos e quer revender com lucro de 45% se o valor da compra for menor que 20 reais. 
//Caso contrário, o lucro será de 30%. O valor deve ser passado para o programa que deverá retornar o valor da venda.

// Exemplo: 
// produto: R$ 18,00 -> 18 * 45% -> R$ 26,10
// produto: R$ 21,00 -> 21 * 30% -> R$ 27,30
// let valorProduto= 18;

const valorCompra = 21

if (valorCompra < 20){
    console.log (valorCompra * 1.45)
}else if(lucroProduto){
  console.log (`valorCompra * 1.3`)
}
