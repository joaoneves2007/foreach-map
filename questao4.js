/*
Questão 04 – Crie um algoritmo usando o método forEach() para encontrar a 
soma de todos os números em um array?
*/

// Array de números
var numeros = [10, 5, 25, 8, 15];

// Variável para armazenar a soma, inicializada com 0
var soma = 0;

// Usando o método forEach() para somar todos os números no array
numeros.forEach(function(numero) {
    soma += numero;
});

console.log("A soma de todos os números é:", soma); // Irá imprimir: A soma de todos os números é: 63