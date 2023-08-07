let operacao = window.prompt("Escolha a operação\n1: Soma\n2: Subtração\n3: Multiplicação\n4: Divisão\n0: Sair\n\nDigite o número correspondente: ")
num1 = parseFloat(window.prompt("Digite o primeiro número: "))
num2 = parseFloat(window.prompt("Digite o segundo número: "))

switch (operacao) {
    case "1":
        soma = num1 + num2 
        window.alert("Soma: "+soma)
        break;

    case "2":
        subtracao = num1 - num2 
        window.alert("Subtração: "+subtracao)
        break;

    case "3":
        window.alert("Multplicação:"+num1*num2)
        break;
    case "4":
        window.alert("Divisão:"+num1/num2)
        break;
    case "0":
        window.alert("Ok, codigo encerrado")
        break;
    default:
        window.alert("Essa opção de operação não existe")
        break;
}