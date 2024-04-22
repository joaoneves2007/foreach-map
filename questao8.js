/*
Questão 08 – Crie um algoritmo usando o método forEach() para calcular a 
média de todos os números em um array?
*/

// Array de números
var numeros = [10, 20, 30, 40, 50];

// Variável para armazenar a soma de todos os números
var soma = 0;

// Usando o método forEach() para calcular a soma de todos os números no array
numeros.forEach(function(numero) {
    soma += numero;
});

// Calculando a média dividindo a soma pelo número de elementos
var media = soma / numeros.length;

console.log("A média de todos os números é:", media); // Irá imprimir: A média de todos os números é: 30