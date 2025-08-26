let readline = require("readline-sync");

while (true) {
    console.log("--------Calculadora--------");
    console.log(" 0 - Sair \n 1 - Adição \n 2 - Subtração \n 3 - Divisão \n 4 - Multiplicação \n 5 - Par ou ímpar \n 6 - potenciação \n 7 - Raiz quadrada");
    
    let opcao = Number(readline.question("Escolha uma opcao: "));

    if (opcao === 0) {
        console.log("Encerrando a calculadora. Até mais!");
        break;
    }

    // Validação do menu
    if (![1, 2, 3, 4, 5,6,7].includes(opcao)) {
        console.log("Opção Inválida! Tente novamente.");
        continue; 
    }

    let number1, number2, number, resultado;

    if ([1, 2, 3, 4, 6].includes(opcao)) {
        number1 = Number(readline.question("Digite o primeiro numero: "));
        number2 = Number(readline.question("Digite o segundo numero: "));
    } else {
        number = Number(readline.question("Digite o numero: "));
    }

    switch (opcao) {
        case 1:
            resultado = number1 + number2;
            break;
        case 2:
            resultado = number1 - number2;
            break;
        case 3:
            if (number2 === 0) {
                console.log("Erro: Divisão por zero não é permitida.");
                continue;
            }
            resultado = number1 / number2;
            break;
        case 4:
            resultado = number1 * number2;
            break;
        case 5:
            if (number % 2 === 0) {
                resultado = "Esse número é par";
            } else {
                resultado = "Esse número é ímpar";
            }
            break;
        case 6:
            resultado = Math.pow(number1, number2);
            break;
        case 7:
            if (number < 0) {
                console.log("Erro: Não é possível calcular raiz quadrada de número negativo.");
                continue;
            }
            resultado = Math.sqrt(number);
            break;
            
    }

    console.log("╔══════════════════════════╗");
    console.log(`  RESULTADO: ${resultado}  `);
    console.log("╚══════════════════════════╝");
}
