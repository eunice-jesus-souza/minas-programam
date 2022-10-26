// Crie um programa que leia a idade do nadador e o classifique em uma das categorias:
// "Infantil A": 5 a 7 anos
// "Infantil B": 8 a 11 anos
// "Juvenil A": 12 a 13 anos
// "Juvenil B": 14 a 17 anos
// "Adulto": maiores de 18 anos

// Caso a pessoa não tenha idade para nenhuma das categorias
// o programa deve retornar "Você ainda não pode competir!"
// Essa atividade deve ser feita em dupla ou trio. Não fazer individual ou com mais de 3 pessoas :)

//                        ###################################

//  Eunice e Miriam

const nome = "nadador"
let idadeA = 5 && 7 
let idadeB = 8 && 11
let idadeC = 12 && 13
let idadeD = 14 && 18
let idadeInfantil = idadeA && idadeB === true
let idadeAdulta = idadeC || idadeD === true

if (idadeInfantil || idadeAdulta === false) {
    console.log("Você ainda não pode competir!")
}else if (idadeInfantil || idadeAdulta){
   console.log("Você pode competir")
}else {

}