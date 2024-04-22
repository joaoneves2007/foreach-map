/*
Questão 13 - Quando você usaria map() em vez de forEach()?
*/

Você usaria o método `map()` em vez de `forEach()` quando deseja criar um novo array com base na transformação dos elementos de um array original. Aqui estão algumas situações em que o `map()` é preferível:

1. **Transformação de elementos**:
   - Quando você precisa transformar cada elemento do array original em um novo valor e criar um novo array com os resultados dessa transformação.

2. **Imutabilidade**:
   - Quando você deseja garantir a imutabilidade dos dados, ou seja, quando prefere não modificar o array original e criar um novo array com os resultados da transformação.

3. **Encadeamento de métodos**:
   - Quando você deseja encadear métodos de array para realizar várias operações de transformação em uma única linha de código.

4. **Gerar novo array com base em cálculos ou operações**:
   - Quando você precisa gerar um novo array com base em cálculos ou operações aplicadas a cada elemento do array original.

5. **Processamento de dados**:
   - Quando você está lidando com dados estruturados e deseja aplicar uma operação a cada elemento do array para processá-los de maneira consistente.

Em resumo, use o método `map()` sempre que precisar transformar cada elemento de um array em um novo valor e criar um novo array com os resultados dessa transformação, mantendo a imutabilidade dos dados, se necessário.