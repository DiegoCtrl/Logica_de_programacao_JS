numero = parseInt(prompt("De qual númro você quer a tabuada: "))

console.log("Tabuada do ",numero)

for (let index = 1; index <= 10; index++) {
    resultado = index*numero
    console.log(`${numero} X ${index} = ${resultado}`) 
}
//test