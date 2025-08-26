// exercicio 1
let timesDeFutebol = ["Sport", "Nautico", "Flamengo", "Corinthians"];
console.log("Primeiro -> "+ timesDeFutebol[0]);
console.log("ultimo -> "+ timesDeFutebol[timesDeFutebol.length-1]);

//exercicio 2
let minhaListaDeTarefas = [];
minhaListaDeTarefas.push("Comprar pão");
minhaListaDeTarefas.push("Estudar JS");
minhaListaDeTarefas.push("Fazer Exercícios");
console.log("Coisas pra fazer: "+ minhaListaDeTarefas);

//exercicio 3
let animais = ["Gato","cachorro","elefante","Leão", "Galinha"];
for (let i = 0; i < animais.length; i++){
    console.log(`O animal na posição ${i}, é ${animais[i]}`);
}

//exercicio 4 
let numeros = [3,4,12,3,8,9,33,80,11,1];
for (let i = 0; i < numeros.length; i++){
    if (numeros[i]%2==0){
        console.log(`O número ${numeros[i]} é par!`);}
    else{
        console.log(`O número ${numeros[i]} é ímpar!`);
    } 
}

//exercicio 5
let frutas = ["Maçã","Banana","uva", "morango", "abacaxi"];
i = 0;
while(i<frutas.length){
    console.log(frutas[i]);
    i++;
}
console.log("Fim do desafio!")

//exercicio 6
for (let i = 2; i <= 9; i++){
    console.log("------------------")
    console.log(`Tabuada no número ${i}:`)
    for (let j = 1; j <= 10; j++){
        console.log(`${i} X ${j} = ${i*j}`)
    }
}
