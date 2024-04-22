/*
Questão 09 - Qual é a diferença fundamental entre map() e forEach()?
*/

Propósito principal:
O método forEach() é usado para iterar sobre cada elemento de um array e executar uma função de retorno de chamada para cada elemento. Ele não retorna um novo array. Seu objetivo principal é iterar sobre os elementos de um array e executar uma operação para cada um deles.
O método map() também é usado para iterar sobre cada elemento de um array, mas ele retorna um novo array contendo os resultados de chamar a função de retorno de chamada para cada elemento. Seu objetivo principal é transformar cada elemento de um array e retornar um novo array com os resultados da transformação.
Retorno:
O método forEach() não retorna nada (undefined), pois seu objetivo é apenas iterar sobre os elementos do array e executar uma operação para cada um deles.
O método map() retorna um novo array contendo os resultados de chamar a função de retorno de chamada para cada elemento do array original.
Uso de retorno de valor:
No forEach(), o retorno de valor da função de retorno de chamada não afeta o resultado final da iteração. Ou seja, você pode retornar um valor dentro da função de retorno de chamada, mas isso não terá efeito no resultado da iteração.
No map(), o valor retornado dentro da função de retorno de chamada é usado para construir o novo array resultante. Cada valor retornado é adicionado ao novo array na mesma posição em que o elemento correspondente estava no array original.
Mutabilidade do array original:
Tanto map() quanto forEach() não alteram o array original. Eles apenas iteram sobre seus elementos e, no caso de map(), retornam um novo array baseado na transformação aplicada a cada elemento do array original