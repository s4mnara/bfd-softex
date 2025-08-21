let readline = require("readline-sync");

let nome = readline.question("Qual o seu nome? ");
let ano = readline.question("Qual o ano do seu nascimento? ");
let idade = 2025-ano;
let condicao;
if (idade >=18){
    condicao="Você pode ser preso!";
}
else {
    condicao="Você não pode ser preso ainda!";
}
console.log(`Olá ${nome}, você possui ${idade} anos e... ${condicao}`);


;;;;