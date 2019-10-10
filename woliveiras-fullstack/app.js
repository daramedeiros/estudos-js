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


//Objects
let pessoa = {
    nome: "Dara",
    idade: 23,
    profissao:"Fullstack Dev",
}

//acessando os dados dentro do um objeto
//objeto + ponto + nome da chave.
console.log(pessoa.nome)
console.log(pessoa.idade)
console.log(pessoa.profissao)

console.log(pessoa)


//Coleções 
let pessoa1 = {
    nome: "Rafael",
    idade: 24,
    profissao:"Back-end Dev",
}

let pessoa3 = {
    nome: "Dedeu",
    idade: 17,
    profissao:"Tecnico de Redes",
}


//Arrays
let lista = [] //dentro de [] é onde vão os itens da lista, separado por vírgula

let listaDeCompras = ["Alface", "Tomate", "Batata doce", "Pêra", "Maçã"]


//Vamos pensar no caso anterior, onde nós precisamos de várias pessoas em nosso programa. Pessoas são objetos que possuem dados chaveados e precisamos criar uma lista com isso dentro agora.

let pessoas = [
    {
        nome: "Dara",
        idade: 23,
        profissao:"Fullstack Dev",
    }, 
    {
        nome: "Rafael",
        idade: 24,
        profissao:"Back-end Dev",
    },
    {
        nome: "Dedeu",
        idade: 17,
        profissao:"Tecnico de Redes",
    }
    
]

//Agora temos uma lista de pessoas e cada item dessa lista é um objeto com dados. 

//Para acessar os itens dessa lista, fazemos lista[posição]

console.log(pessoas[0])