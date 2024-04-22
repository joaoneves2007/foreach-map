/*
Questão 15 - Qual é o propósito principal do método map()?
*/

O propósito principal do método `map()` é transformar cada elemento de um array em um novo valor, com base em uma função de transformação fornecida, e retornar um novo array contendo os resultados dessa transformação.

Em resumo, o propósito principal do `map()` é criar um novo array com base na transformação dos elementos de um array original, mantendo a imutabilidade dos dados, ou seja, sem modificar o array original.

Isso é útil em situações onde você precisa realizar uma operação em cada elemento de um array e gerar um novo array com os resultados dessa operação, como mapear dados para uma exibição, processar dados estruturados, calcular valores com base em dados existentes, entre outros.

Por exemplo, se você tiver um array de números e precisar criar um novo array contendo os quadrados de cada número, você pode usar o método `map()` para isso:

```javascript
var numeros = [1, 2, 3, 4, 5];

var quadrados = numeros.map(function(numero) {
    return numero * numero;
});

console.log(quadrados); // Irá imprimir: [1, 4, 9, 16, 25]
```

Neste exemplo, `map()` é usado para criar um novo array `quadrados`, onde cada elemento é o quadrado do elemento correspondente no array `numeros`.