/*
Questão 17 - Qual é a diferença entre map() e forEach() em termos de 
manipulação do array original?
*/

A diferença fundamental entre os métodos `map()` e `forEach()` em termos de manipulação do array original é que o método `map()` retorna um novo array com base na transformação dos elementos do array original, enquanto o método `forEach()` não retorna um novo array e não modifica o array original.

Aqui está a diferença em termos de manipulação do array original:

1. **map()**:
   - O método `map()` não modifica o array original. Ele cria um novo array com base na transformação dos elementos do array original e retorna esse novo array.
   - Cada elemento do array original é mapeado para um novo valor com base na função de retorno de chamada fornecida.
   - O array original permanece inalterado após a chamada de `map()`, e o novo array é retornado com base nos resultados da transformação.

2. **forEach()**:
   - O método `forEach()` também não modifica o array original. Ele itera sobre cada elemento do array original e executa uma função de retorno de chamada para cada elemento, mas não retorna um novo array.
   - A função de retorno de chamada do `forEach()` é usada para realizar operações em cada elemento do array, mas essas operações não modificam o array original. Elas podem atualizar variáveis externas, imprimir valores, etc.
   - O array original permanece inalterado após a chamada de `forEach()`, e nenhum novo array é retornado.