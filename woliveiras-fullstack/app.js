console.log('hello word')

//variáveis - calculo IMC

let peso = 65

let altura = 1.60

let imc = peso / (altura * altura)

//constantes - valores constantes que não mudam - ex:ContaBancária
let saldoBancario = 1000
const taxa = 1

saldoBancario = (saldoBancario - 100) - taxa
console.log(`Primeiro saque ${saldoBancario}`)

saldoBancario = (saldoBancario - 100) - taxa
console.log(`Segundo saque ${saldoBancario}`)

saldoBancario = (saldoBancario - 100) - taxa
console.log(`Terceiro saque ${saldoBancario}`)

//tipos de dados
const idade = 23

let dinheiroNaConta = 700.00

const nome = "Dara Medeiros"

//strings 
console.log(typeof nome)

console.log(typeof dinheiroNaConta)

console.log(typeof idade)

//booleans
let idadeAtual = 23

let maiorIdade = 18

console.log(idadeAtual >= maiorIdade)

let menorDeIdade = 15

console.log(menorDeIdade >= maiorIdade)

//Null e undefined

let variavelSemNada = null

let outraVariavel = variavelSemNada

console.log(variavelSemNada)
console.log(variavelSemNada)

let naoNasciAinda = undefined

console.log(typeof naoNasciAinda)