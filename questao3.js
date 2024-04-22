/*
Questão 03 – Crie um algoritmo usando o método forEach() para encontrar o 
maior número em um array de números? 
*/

// Array de números
var numeros = [10, 5, 25, 8, 15];

// Variável para armazenar o maior número, inicializada com o menor valor possível
var maiorNumero = Number.MIN_VALUE;

// Usando o método forEach() para encontrar o maior número no array
numeros.forEach(function(numero) {
    if (numero > maiorNumero) {
        maiorNumero = numero;
    }
});

console.log("O maior número é:", maiorNumero); // Irá imprimir: O maior número é: 25