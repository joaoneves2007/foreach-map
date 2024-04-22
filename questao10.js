/*
Questão 10 - É possível modificar o array original com map()?
*/

Neste exemplo, map() é usado para criar um novo array dobrados, onde cada elemento é o dobro do elemento correspondente no array numeros. No entanto, numeros permanece inalterado após a chamada do método map().

var numeros = [1, 2, 3, 4, 5];

var dobrados = numeros.map(function(numero) {
    return numero * 2;
});

console.log(dobrados); // Irá imprimir: [2, 4, 6, 8, 10]
console.log(numeros);  // Irá imprimir: [1, 2, 3, 4, 5]