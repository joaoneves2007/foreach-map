/*
Questão 07 – Crie um algoritmo usando o método map() para calcular o 
quadrado de cada número em um array?
*/

// Array original
var numeros = [1, 2, 3, 4, 5];

// Usando o método map() para calcular o quadrado de cada número
var quadrados = numeros.map(function(numero) {
    return numero * numero;
});

console.log(quadrados); // Irá imprimir: [1, 4, 9, 16, 25]