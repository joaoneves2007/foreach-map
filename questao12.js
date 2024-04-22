/*
Questão 12 - Qual é a diferença entre map() e forEach() em relação ao retorno 
de valores de uma função de callback?
*/

A diferença fundamental entre `map()` e `forEach()` em relação ao retorno de valores de uma função de callback é como esses valores afetam o resultado final da iteração:

1. **map()**:
   - No método `map()`, o valor retornado pela função de callback é usado para construir o novo array resultante. Cada valor retornado pela função de callback é adicionado ao novo array na mesma posição em que o elemento correspondente estava no array original. Portanto, o resultado final da iteração será um novo array com o mesmo comprimento do array original, contendo os valores retornados pela função de callback.
   - Se a função de callback não retornar um valor (`undefined`) para um determinado elemento, o valor correspondente no novo array será `undefined`.
   - Em resumo, o `map()` mapeia cada elemento do array original para um novo valor, retornando um novo array com os resultados da transformação.

2. **forEach()**:
   - No método `forEach()`, o valor retornado pela função de callback não afeta o resultado final da iteração. A função de callback é simplesmente executada para cada elemento do array, mas o valor retornado não é usado para construir ou modificar o array original ou qualquer outro array.
   - Portanto, embora seja possível retornar um valor dentro da função de callback do `forEach()`, esse valor não terá nenhum efeito na iteração em si ou nos elementos do array. O `forEach()` é usado principalmente para realizar operações em cada elemento do array, como imprimir valores, atualizar variáveis externas, etc.