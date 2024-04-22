/*
Questão 16 - E se a função de callback fornecida ao método map() não 
retornar nada? O que será retornado no novo array?
*/

Se a função de callback fornecida ao método `map()` não retornar nada (ou seja, retornar `undefined`) para um determinado elemento do array original, o valor correspondente no novo array será `undefined`. 

Isso significa que o novo array resultante terá o mesmo comprimento que o array original, e cada posição no novo array corresponderá ao resultado da função de callback para o elemento correspondente no array original.

Por exemplo:

```javascript
var numeros = [1, 2, 3, 4, 5];

var novoArray = numeros.map(function(numero) {
    // Retorna undefined para números pares
    if (numero % 2 === 0) {
        return;
    }
    // Retorna o dobro dos números ímpares
    return numero * 2;
});

console.log(novoArray); // Irá imprimir: [undefined, 4, undefined, 8, undefined]
```

Neste exemplo, a função de callback retorna `undefined` para números pares e o dobro dos números ímpares. Portanto, o novo array resultante terá `undefined` nas posições correspondentes aos números pares e o dobro dos números ímpares.