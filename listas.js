let nomes = []
let idades = []
let coresFavoritas = []

do {
   let nome = prompt("Digite o nome: ");
   nomes.push(nome)
   let idade = prompt("Digite a idade: ");
   idades.push(idade)
   let corF = prompt("Digite cor favorita: ");
   coresFavoritas.push(corF)
   console.log(`nomes: ${nomes}, \nidades: ${idades}, \ncores Favoritas: ${coresFavoritas}`)
} while (nomes.length < 10);

coresFavoritas[2] = 'Rosa'
idades[1] = 'Muito velha'
console.log(`Pós edição: nomes: ${nomes}\n, idades: ${idades}, \ncores Favoritas: ${coresFavoritas}`)

