let readline = require("readline-sync");
while (true) {
console.log("--------Calculadora--------");
console.log(" 1 - Adição \n 2 - Subtração \n 3 - Divisão \n 4 - Multiplicação");
let opcao = Number(readline.question("Escolha uma opção: "));
let number1= Number(readline.question("Digite o primeiro número: "));
let number2= Number(readline.question("Digite o segundo número: "));
let resultado;
switch (opcao){
    case 1:
    resultado = number1+number2;
    break;
    case 2:
    resultado = number1-number2;
    break;
    case 3:
    resultado = number1/number2;
    break;
    case 4:
    resultado = number1*number2;
    break;
    default:
    resultado= "Opção Inválida";
}
console.log("Resultado : " + resultado)
}