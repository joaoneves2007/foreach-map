/*
Questão 11 - map() sempre retorna um novo array com o mesmo comprimento 
que o array original?
*/

Sim, o método `map()` sempre retorna um novo array com o mesmo comprimento que o array original. 

O novo array resultante do `map()` terá exatamente o mesmo número de elementos que o array original. Isso ocorre porque o método `map()` itera sobre cada elemento do array original e aplica uma função de transformação a cada um desses elementos, resultando em um novo elemento no novo array.

Se a função de transformação retornar um valor para cada elemento do array original, o novo array terá o mesmo comprimento que o array original. Se a função de transformação não retornar nada (`undefined`) para um determinado elemento, o novo array ainda terá o mesmo comprimento, mas o valor correspondente será `undefined`.

Por exemplo:

```javascript
var numeros = [1, 2, 3, 4, 5];

var quadrados = numeros.map(function(numero) {
    return numero * numero;
});

console.log(quadrados.length); // Irá imprimir: 5
console.log(quadrados);        // Irá imprimir: [1, 4, 9, 16, 25]
```

Neste exemplo, `numeros` tem 5 elementos, e após a chamada de `map()`, o novo array `quadrados` também tem 5 elementos, cada um correspondendo ao quadrado de um elemento do array original.