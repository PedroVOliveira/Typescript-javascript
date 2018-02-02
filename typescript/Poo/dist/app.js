"use strict";
var Carro = /** @class */ (function () {
    function Carro(modelo, numeroDePortas) {
        this.velocidade = 0;
        this.modelo = modelo;
        this.numeroDeportas = numeroDePortas;
    }
    Carro.prototype.acelerar = function () {
        this.velocidade = this.velocidade + 10;
    };
    Carro.prototype.parar = function () {
        this.velocidade = 0;
    };
    Carro.prototype.velocidadeAtual = function () {
        return this.velocidade;
    };
    return Carro;
}());
var carroA = new Carro('cruze', 4);
console.log(carroA);
carroA.acelerar();
console.log(carroA);
carroA.acelerar();
carroA.acelerar();
carroA.acelerar();
console.log(carroA);
carroA.parar();
console.log(carroA);
/*
    exemplos basicos de como funciona a orientação a objetos no typescript
*/ 
