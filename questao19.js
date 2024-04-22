/*
Questão 19 - O método forEach() sempre retorna um valor?
*/

Não, o método `forEach()` não retorna um valor. Ele simplesmente itera sobre os elementos de um array e executa uma função de retorno de chamada para cada elemento, mas não retorna nada (`undefined`).

O propósito principal do método `forEach()` é realizar uma operação para cada elemento de um array, como imprimir valores, atualizar variáveis externas, chamar outras funções, etc. Ele não retorna um novo array nem modifica o array original.

Por exemplo:

```javascript
var numeros = [1, 2, 3, 4, 5];

numeros.forEach(function(numero) {
    console.log(numero);
});

// O retorno de valor de forEach() é undefined
var resultado = numeros.forEach(function(numero) {
    // Esta função de callback é executada para cada elemento do array, mas não retorna nada
});

console.log(resultado); // Irá imprimir: undefined
```

Neste exemplo, `forEach()` é usado para imprimir cada elemento do array `numeros`. Embora `forEach()` itere sobre cada elemento do array e execute a função de callback para cada um deles, não retorna nada (`undefined`).