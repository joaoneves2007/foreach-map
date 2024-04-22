/*
Questão 05 – Crie um algoritmo usando o método map() para criar um novo 
array com o dobro de cada número ímpar em um array original?
*/

// Array original
var numeros = [1, 2, 3, 4, 5];

// Usando o método map() para criar um novo array com o dobro de cada número ímpar
var novoArray = numeros.map(function(numero) {
    // Verifica se o número é ímpar
    if (numero % 2 !== 0) {
        // Retorna o dobro do número ímpar
        return numero * 2;
    } else {
        // Retorna o número sem alteração se for par
        return numero;
    }
});

console.log(novoArray); // Irá imprimir: [2, 2, 6, 4, 10]