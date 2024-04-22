/*
Questão 06 – Crie um algoritmo usando o método forEach() para imprimir 
apenas os elementos pares de um array?
*/

// Array de números
var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Usando o método forEach() para imprimir apenas os elementos pares do array
numeros.forEach(function(numero) {
    if (numero % 2 === 0) {
        console.log(numero);
    }
});