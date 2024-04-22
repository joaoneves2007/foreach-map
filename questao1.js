/*
Questão 01 - Crie um array com 5 números e usando o método forEach(), crie 
um algoritmo para  adicionar 1 a cada elemento deste array?
*/

// Criando um array com 5 números
var numeros = [1, 2, 3, 4, 5];

// Usando o método forEach() para adicionar 1 a cada elemento do array
numeros.forEach(function(numero, indice, array) {
    array[indice] = numero + 1;
});

console.log(numeros); // Irá imprimir: [2, 3, 4, 5, 6]