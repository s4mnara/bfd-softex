let readline = require("readline-sync");
while (true) {
console.log("--------Calculadora--------");
console.log(" 0 - Sair \n 1 - Adição \n 2 - Subtração \n 3 - Divisão \n 4 - Multiplicação");
let opcao = Number(readline.question("Escolha uma opcao: "));

if (opcao === 0) {
    console.log("Encerrando a calculadora. Até mais!");
    break;
    }

    // Validação do menu
if (![1, 2, 3, 4].includes(opcao)) {
    console.log("Opção Inválida! Tente novamente.");
    continue; 
    }

let number1= Number(readline.question("Digite o primeiro numero: "));
let number2= Number(readline.question("Digite o segundo numero: "));
let resultado;

switch (opcao){
    case 1:
    resultado = number1+number2;
    break;
    case 2:
    resultado = number1-number2;
    break;
    case 3:
    if (number2 === 0) {
        console.log("Erro: Divisão por zero não é permitida.");
        continue;
    }
    resultado = number1/number2;
    break;
    case 4:
    resultado = number1*number2;
    break;
}
console.log("╔══════════════════════════╗");
console.log(`       RESULTADO: ${resultado}`);
console.log("╚══════════════════════════╝");

}