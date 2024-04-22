/*
Questão 02 - Crie um algoritmo usando o método map() para converter um 
array de strings para um array de números?
*/

// Array de strings
var arrayDeStrings = ["1", "2", "3", "4", "5"];

// Usando o método map() para converter o array de strings para um array de números
var arrayDeNumeros = arrayDeStrings.map(function(stringNumero) {
    return parseInt(stringNumero);
});

console.log(arrayDeNumeros); // Irá imprimir: [1, 2, 3, 4, 5]