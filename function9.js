
/*
  Parabéns, você evoluiu e depois de empreender em um restaurante, agora você
  tem um banco e gerencia ele. 

  1. Crie um programa que cadastra pessoas (nome, cpf, idade, saldo, confiabilidade(de 0 a 10));
      - Crie um Array Clientes e crie uma função que adiciona clientes.
  2. Crie uma função que verifica pelo cpf se a pessoa é sua cliente.
 
*/
const clientes = []

const adicionarCliente = (nome, cpf, idade, saldo, confiabilidade) => {
    const novoCliente = {
        nome:nome,
        cpf: cpf,
        idade: idade,
        saldo: saldo,
        confiabilidade: confiabilidade   
    }
    clientes.push(novoCliente)
} 

adicionarCliente("Elis", 123, 22, 1212121214, 10)
adicionarCliente("Eunice", 127, 22, 1212121216, 8)

console.log(clientes)

const verificarCPF = (cpf) => {
    const verificarCPF = (clientes.find((cliente) => cliente.cpf === cpf))
    // for(let i = 0; i < clientes.length; i++){
    //     // console.log(clientes[i].cpf)
    //     if(cpf === clientes[i].clientes){
    //     //   console.log(`Você é cliente `)
    //         console.log(`${clientes[i].nome} é minha cliente`)
    //     }
    // }
    if(existe){
        console.log("É cliente")
    }else{
        console.log("Não é cliente")
    }
}
verificarCPF(2)
// 3. Crie uma função que debita o saldo da pessoa caso ela saque um valor.
//2. Crie uma função que verifica pelo cpf se a pessoa é sua cliente.
const verificaCPF = (cpf) => {
    // const existe = clientes.find((cliente) => cliente.cpf === cpf);
    // const existe = clientes.findIndex((cliente) => cliente.cpf === cpf);
  
    // if (existe) {
    //   console.log("É nossa cliente");
    // } else {
    //   console.log("Cliente não existe");
    // }
    for (let i = 0; i < clientes.length; i++) {
      if (cpf === clientes[i].cpf) {
        console.log(`${clientes[i].nome} é nossa cliente`);
        return;
      }
    }
    console.log("Cliente não existe");
  };
  verificaCPF(999);
  
  //3. Crie uma função que debita o saldo da pessoa caso ela saque um valor.
  const debitar = (cpf, valor) => {
    for (let i = 0; i < clientes.length; i++) {
      if (cpf === clientes[i].cpf) {
        const novoSaldo = clientes[i].saldo - valor;
        clientes[i].saldo = novoSaldo;
        console.log("Valor debitado!!!!");
      }
    }
  };
  console.log(clientes);
  debitar(321, 2);
  console.log(clientes);
  