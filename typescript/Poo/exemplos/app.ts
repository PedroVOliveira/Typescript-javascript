import Carro from "./Carro"
import Pessoas from "./Pessoas"
import Concessionaria from "./Concessionaria"

/*
let carroA = new Carro('cruze', 4)
console.log(carroA)
carroA.acelerar()
console.log(carroA)
carroA.acelerar()
carroA.acelerar()
carroA.acelerar()
console.log(carroA)
carroA.parar()
console.log(carroA)
*/

/*
let concessionaria = new Concessionaria('Rua padre galvão')

console.log(concessionaria)
*/

/*
let pesssoas = new Pessoas('ismael', 'cruzer')
console.log(pesssoas.dizerCarroPreferido())
*/

/*------------------------------
    Criar carros
-------------------------------*/

let carroA = new Carro('cruzer', 4)
let carroB = new Carro('veloster', 3)
let carroC = new Carro('Uno mile', 2)

/*-------------------------------
    Montar lista de Carros da concessionaria
-------------------------------*/

let listaDeCarros:Array<Carro> = [carroA, carroB, carroC]
let concessionaria = new Concessionaria('Rua padre galvão', listaDeCarros)

/*-------------------------------
    Mostra lista de Carros
-------------------------------*/

/*
console.log(concessionaria.mostrarListaDeCarros())
*/

/*------------------------------
    compra o Carro
-------------------------------*/

let cliente = new Pessoas("ismael", "cruzer")
console.log(cliente.dizerCarroPreferido())

concessionaria.mostrarListaDeCarros().map((carro: Carro) =>{

    if(carro['modelo'] == cliente.dizerCarroPreferido()){

        //compra o carro
        cliente.comprarCarro(carro)
    }
})

console.log(cliente.dizerCarroQueTem())

/*
    exemplos basicos de como funciona a orientação a objetos no typescript
*/