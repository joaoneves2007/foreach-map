/*
Questão 18 - O que acontece se você chamar map() em um array vazio?
*/

Se você chamar o método `map()` em um array vazio, o resultado será um novo array vazio, pois não há elementos para serem mapeados.

Por exemplo:

```javascript
var arrayVazio = [];

var novoArray = arrayVazio.map(function(elemento) {
    return elemento * 2; // Esta função de callback nunca será chamada, pois não há elementos no array
});

console.log(novoArray); // Irá imprimir: []
```

Neste exemplo, como o array `arrayVazio` está vazio, a função de callback passada para o `map()` nunca será chamada, pois não há elementos para serem mapeados. Portanto, o `map()` retornará um novo array vazio.