rodas = parseInt(prompt("Quantidade de rodas: ")) 
peso = parseFloat(prompt("Peso bruto em quilogramas: "))
cabe = parseInt(prompt("Quantidade de pessoas no veículo: "))

if (rodas == 3 || rodas == 2) {
    alert("A cadegoria ideal é: A\nVeículos com duas ou três rodas.")
}
else if(rodas == 4 && cabe <=8 && peso <= 3500){
    alert("A cadegoria ideal é: B\nVeículos com quatro rodas, que acomodam até oito pessoas e seu peso é de até 3500kg.")
}
else if(rodas >= 4 && peso > 3500 && peso < 6000 && cabe < 8){
    alert("A cadegoria ideal é: C\nVeículos com quatro rodas ou mais e com peso entre 3500 e 6000kg.")
}
else if(rodas >= 4 && cabe > 8){
    alert("A cadegoria ideal é: D\nVeículos com quatro rodas ou mais e que acomodam mais de oito pessoas.")
}
else if(rodas >= 4 && peso > 6000){
    alert("A cadegoria ideal é: E\nVeículos com quatro rodas ou mais e com mais de 6000kg.")
}