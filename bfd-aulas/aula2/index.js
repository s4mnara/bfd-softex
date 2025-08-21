const readline = require('readline');

let saldo = 0;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function perguntar(query) {
  return new Promise(resolve => rl.question(query, resolve));
}

async function main() {
  let sair = false;

  while (!sair) {
    console.log('\n=== Banco Node.js ===');
    console.log('1 - Saque');
    console.log('2 - Depósito');
    console.log('3 - Ver saldo');
    console.log('4 - Sair');

    let opcao = await perguntar('Escolha uma opção: ');

    switch (opcao.trim()) {
      case '1':
        let valorSaque = await perguntar('Digite o valor do saque: ');
        sacar(valorSaque);
        break;

      case '2':
        let valorDeposito = await perguntar('Digite o valor do depósito: ');
        depositar(valorDeposito);
        break;

      case '3':
        console.log(`Seu saldo atual é: R$${saldo.toFixed(2)}`);
        break;

      case '4':
        console.log('Saindo do sistema. Até logo!');
        sair = true;
        break;

      default:
        console.log('Opção inválida.');
    }
  }
  rl.close();
}

function sacar(valor) {
  valor = parseFloat(valor);
  if (isNaN(valor) || valor <= 0) {
    console.log('Valor inválido para saque!');
  } else if (valor > saldo) {
    console.log('Saldo insuficiente!');
  } else {
    saldo -= valor;
    console.log(`Saque realizado com sucesso! Novo saldo: R$${saldo.toFixed(2)}`);
  }
}

function depositar(valor) {
  valor = parseFloat(valor);
  if (isNaN(valor) || valor <= 0) {
    console.log('Valor inválido para depósito!');
  } else {
    saldo += valor;
    console.log(`Depósito realizado com sucesso! Novo saldo: R$${saldo.toFixed(2)}`);
  }
}

main();


