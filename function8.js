
// Você vai abrir um restaurante, crie 4 pratos para o seu restaurante
// ele deve ser criado no formato de objeto contendo os seguntes dados
// nome, descricao, quantidade em gramas, nota do chef
// em seguida adicione esses pratos em um array chamado cardapio
// let cardapio = []

const prato1 = {
    nome: "estrogonof",
    descricao: "Com peito de frango",
    quantidade: 200,
    notaDoChef: 10
}
const prato2 = {
    nome: "feijoada",
    descricao: "Com carne seca",
    quantidade: 300,
    notaDoChef: 9
}
const prato3 = {
    nome: "Caviar",
    descricao: "Delícia",
    quantidade: 200,
    notaDoChef: 10
}
const prato4 = {
    nome: "Macarrao",
    descricao: "Macarrao espaguete",
    quantidade: 300,
    notaDoChef: 8
}

// cardapio.push(prato1)
// cardapio.push(prato2)
// cardapio.push(prato3)
// cardapio.push(prato4)
// console.log(cardapio)

console.log("####################################");
console.log("Bem vinda ao restaurante da Eunice!!!!");
console.log("----");

for (let i = 0; i < cardapio.length; i++) {
  console.log(`Prato: ${cardapio[i].nome}\n${cardapio[i].descricao}`);
  console.log(
    cardapio[i].quantidade +
      " gramas de pura delicia e nota " +
      cardapio[i].notaDoChef +
      " pelo chef!"
  );
  console.log("--------------------------------");
}
const cardapio =[]

    function adicionarPratoAoCardapio(nome, descricao, quantidade, notaChef,){
    const prato = {
        nome: nome,
        descricao: descricao,
        quantidade: quantidade,
        notaChef: notaChef
    }
    console.log(prato)
}
adicionarPratoAoCardapio("")
