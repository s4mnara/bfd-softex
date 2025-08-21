// Fazer um formulário para usuário 

//Tem que criar um formulário (usando o pacote readline-sync) pegando as informações:
//  Nome, Data de nascimento (dia, mês e ano), Número telefone, 
// Tem animal em casa ?, Quantos animais tem ? 
// e também saber se o usuário  é de maior.
//(Pode fazer ate criar mais perguntas)
// e quero q imprima o log (que seria as informações do usuário do jeito que mostrei em sala).

const readline = require('readline-sync');
const hoje = new Date();
console.log("----------Formulário de entrada----------")
let nome = readline.question("1 - Qual o seu nome? ");
let dataNascimento = readline.question("2 - Qual a data do seu nascimento? DD/MM/AAAA ");
let tel = readline.question("3 - Qual o seu telefone? ")
let animal = readline.question("4 - Tem animal em casa? (S/N)")
let quantosAnimais = "null";
if (animal.toLowerCase() === "s"){
    quantosAnimais= readline.question("5 - Quantos? ")
}

let [dia, mes, ano] = dataNascimento.split("/").map(Number); //array de data repartido pelas barras
let nascimento = new Date(ano, mes - 1, dia); // Em JavaScript, os meses vão de 0 (janeiro) a 11 (dezembro)

let idade = hoje.getFullYear() - nascimento.getFullYear();
let m = hoje.getMonth() - nascimento.getMonth();

// Ajuste se ainda não fez aniversário este ano
if (m < 0 || (m === 0 && hoje.getDate() < nascimento.getDate())) {
    idade--;
}

let preso = idade >= 18 ? "Você é maior de idade" : "Você é menor de idade"; //operador ternário 

console.log(`Obrigado por responder ${nome}!`)
console.log("--------Suas Informações--------")
console.log(`NOME: ${nome}\nIDADE: ${idade} (${preso})\nTELEFONE: ${tel}\nTEM ANIMAL: ${animal}\nQUANTIDADE: ${quantosAnimais}`);


