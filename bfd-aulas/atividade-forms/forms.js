const readline = require('readline-sync');
const hoje = new Date();
console.log("========== Formulário de entrada ==========")
let nome = readline.question("1 - Qual o seu nome? ");
let dataNascimento = readline.question("2 - Qual a data do seu nascimento? DD/MM/AAAA ");
let tel = readline.question("3 - Qual o seu telefone? ")
let animal = readline.question("4 - Tem animal em casa? (S/N)")
let quantosAnimais = "null";
if (animal.toLowerCase() === "s"){
    quantosAnimais= readline.question("5 - Quantos? ")
}
else {
    quantosAnimais = "Nenhum";
    console.log("Que pena, animais são ótimos companheiros!");
}
let profissao = readline.question("6 - Qual sua profissao? ");
console.log("============================================")
console.log(" ")

let [dia, mes, ano] = dataNascimento.split("/").map(Number); // data dividida em partes e convertida para número
let nascimento = new Date(ano, mes - 1, dia); // Em JavaScript, os meses vão de 0 (janeiro) a 11 (dezembro)

let idade = hoje.getFullYear() - nascimento.getFullYear();
let m = hoje.getMonth() - nascimento.getMonth();

// Ajuste se ainda não fez aniversário este ano (Se o mês atual for menor ou se for o mesmo mês mas ainda não fez aniversário)
if (m < 0 || (m === 0 && hoje.getDate() < nascimento.getDate())) { 
    idade--; 
}

let preso = idade >= 18 ? "Você é maior de idade" : "Você é menor de idade"; //operador ternário 

console.log(`Obrigado por responder ${nome}!`)
console.log(`
--------Suas Informações--------
NOME: ${nome}
DATA DE NASCIMENTO: ${dataNascimento}
IDADE: ${idade} (${preso})
TELEFONE: ${tel}
TEM ANIMAL: ${animal === "s" ? "Sim" : "Não"}
QUANTIDADE: ${quantosAnimais}
PROFISSÃO: ${profissao}
Data de hoje: ${hoje.toLocaleDateString()}
--------------------------------
`);


