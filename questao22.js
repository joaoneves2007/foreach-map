/*
Questão 22 - O que acontece se a função de callback passada para forEach() 
modificar os elementos do array original?
*/

Se a função de callback passada para o método `forEach()` modificar os elementos do array original, as modificações serão refletidas no próprio array original. Isso ocorre porque `forEach()` itera sobre cada elemento do array e executa a função de callback para cada um deles, permitindo que você modifique os elementos diretamente.

Por exemplo:

```javascript
var numeros = [1, 2, 3, 4, 5];

numeros.forEach(function(numero, indice, array) {
    array[indice] = numero * 2; // Modifica cada elemento para ser o dobro do valor original
});

console.log(numeros); // Irá imprimir: [2, 4, 6, 8, 10]
```

Neste exemplo, a função de callback passada para `forEach()` multiplica cada elemento por 2 e armazena o resultado de volta no mesmo índice no array original `numeros`. Como resultado, o array `numeros` será modificado diretamente e conterá os valores dobrados após a execução de `forEach()`.

É importante ter cuidado ao modificar o array original dentro da função de callback do `forEach()`, especialmente se você estiver realizando operações assíncronas ou compartilhando o array com outras partes do código. Modificar o array original pode levar a efeitos colaterais inesperados e dificultar a manutenção do código.