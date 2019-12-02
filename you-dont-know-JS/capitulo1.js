/* Executando um programa

Essa instrução tem quatro expressões dentro dela:
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

/* Input
A forma mais comum de receber informações do usuário é através de um formulário em uma página HTML(com caixas de textos) para o usuário inserir suas informações e depois usar JS para ler esses valores nas variáveis do seu programa. 
Mas a forma mais simples é usando a função prompt(...)
*/ 

age = prompt("Por favor, diga-me sua idade: ")

console.log(age)

/*Operadores

Atribuição: = como em a = 2.

Aritmético: + (adição), - (subtração), * (multiplicação), e / (divisão), como em a * 3.

Atribuição com Operação: +=, -=, *=, e /= são operadores comuns que combinam operadores aritméticos com a atribuição, como em a += 2 (o mesmo que a = a + 2).

Incremento/Decremento: ++ (incremento), -- (decremento), como em a++ (similar à a = a + 1).

Acesso a propriedade do Objeto: . como em console.log().

Igualdade: == (igualdade), === (igualdade estrita), != (desigualdade), !== (desigualdade estrita), como em a == b.

Veja "Valores & Tipos" e o Capítulo 2.

Comparação: < (menor que), > (maior que), <= (menor ou igual), >= (maior ou igual), como em a <= b.

Veja "Valores & Tipos" e o Capítulo 2.

Lógicos: && (e), || (ou), como em a || b que seleciona a ou b.
*/

