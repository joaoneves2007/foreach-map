/*
Questão 21 - Existe alguma diferença de desempenho entre map() e 
forEach()?
*/

Sim, pode haver diferenças de desempenho entre `map()` e `forEach()`, dependendo do contexto em que são usados e das operações realizadas dentro da função de callback.

Em termos gerais:

1. **`map()`**:
   - O método `map()` cria um novo array com base na transformação dos elementos do array original. Isso pode envolver a alocação de memória adicional para armazenar o novo array.
   - O desempenho do `map()` pode ser influenciado pela complexidade da função de callback e pela quantidade de operações realizadas para cada elemento do array.
   - No entanto, o `map()` pode ser otimizado em alguns mecanismos JavaScript para melhorar o desempenho, especialmente em cenários onde a transformação é simples e o código da função de callback é eficiente.

2. **`forEach()`**:
   - O método `forEach()` itera sobre cada elemento do array e executa uma função de callback para cada um deles. Ele não cria um novo array e não envolve alocação de memória adicional.
   - O desempenho do `forEach()` pode ser influenciado pela quantidade de operações realizadas dentro da função de callback e pela complexidade do código executado para cada elemento.
   - Em alguns casos, o `forEach()` pode ter desempenho ligeiramente melhor do que o `map()`, especialmente em cenários onde não é necessário criar um novo array e apenas realizar operações em cada elemento do array original.

No entanto, é importante notar que as diferenças de desempenho entre `map()` e `forEach()` podem ser insignificantes na maioria dos casos de uso. Otimizar o desempenho geralmente envolve identificar e resolver gargalos reais de desempenho em seu código, em vez de simplesmente escolher entre `map()` e `forEach()`.