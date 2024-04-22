/*
Questão 14 - É possível encadear map() e forEach() juntos?
*/

Sim, é possível encadear o método `map()` e o método `forEach()` juntos, mas geralmente não é uma prática comum e pode ser menos legível. 

O método `map()` é usado para transformar cada elemento de um array em um novo valor e retornar um novo array com os resultados dessa transformação. Por outro lado, o método `forEach()` é usado para executar uma operação para cada elemento de um array, mas não retorna um novo array.

Se você encadear `map()` e `forEach()` juntos, o `forEach()` será aplicado ao novo array retornado pelo `map()`, o que pode ser confuso e desnecessário, a menos que você esteja realmente interessado em fazer operações adicionais nos elementos do novo array.

Aqui está um exemplo de encadeamento de `map()` e `forEach()` juntos:

```javascript
var numeros = [1, 2, 3, 4, 5];

numeros
  .map(function(numero) {
    return numero * 2;
  })
  .forEach(function(numeroDobrado) {
    console.log(numeroDobrado);
  });
```

Neste exemplo, `map()` é usado para dobrar cada número no array original, e `forEach()` é usado para imprimir cada número dobrado do novo array resultante. No entanto, você poderia alcançar o mesmo resultado sem o encadeamento, simplesmente aplicando `forEach()` diretamente ao array original ou ao novo array resultante de `map()`.