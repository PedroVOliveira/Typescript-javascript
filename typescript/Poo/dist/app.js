"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Carro_1 = require("./Carro");
var Pessoas_1 = require("./Pessoas");
var Concessionaria_1 = require("./Concessionaria");
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
var carroA = new Carro_1.default('cruzer', 4);
var carroB = new Carro_1.default('veloster', 3);
var carroC = new Carro_1.default('Uno mile', 2);
/*-------------------------------
    Montar lista de Carros da concessionaria
-------------------------------*/
var listaDeCarros = [carroA, carroB, carroC];
var concessionaria = new Concessionaria_1.default('Rua padre galvão', listaDeCarros);
/*-------------------------------
    Mostra lista de Carros
-------------------------------*/
/*
console.log(concessionaria.mostrarListaDeCarros())
*/
/*------------------------------
    compra o Carro
-------------------------------*/
var cliente = new Pessoas_1.default("ismael", "cruzer");
console.log(cliente.dizerCarroPreferido());
concessionaria.mostrarListaDeCarros().map(function (carro) {
    if (carro['modelo'] == cliente.dizerCarroPreferido()) {
        //compra o carro
        cliente.comprarCarro(carro);
    }
});
console.log(cliente.dizerCarroQueTem());
/*
    exemplos basicos de como funciona a orientação a objetos no typescript
*/ 
