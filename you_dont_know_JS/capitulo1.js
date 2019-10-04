/* Essa instrução tem quatro expressões dentro dela:
- 2 é uma expressão de valor literal; 
- b é uma expressão de valor variável, que significa que ela armazena seu valor atual; 
b* 2 é uma expressão aritmética, que significa execute a multiplicação;
a = b *2 é uma expressão de atribuição que significa designar o resultado da expressão b* 2 para a variável a 
*/
a = 21 

b = a * 2

/* Entendendo Output console.log()
Primeiro, a parte do log(b) é usada como uma função de chamada (veja "funções"). O que está acontecendo é que estamos usando a variável b na função para pegar seu valor e imprimir no console.
Depois, a parte do console. é uma referência ao objeto onde a função log(...) está localizada. 
*/

console.log(b)

