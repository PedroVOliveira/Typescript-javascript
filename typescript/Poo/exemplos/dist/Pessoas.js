"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pessoas = /** @class */ (function () {
    function Pessoas(nome, carroPreferido) {
        this.nome = nome;
        this.carroPreferido = carroPreferido;
    }
    Pessoas.prototype.dizerNome = function () {
        return this.nome;
    };
    Pessoas.prototype.dizerCarroPreferido = function () {
        return this.carroPreferido;
    };
    Pessoas.prototype.comprarCarro = function (Carro) {
        this.carro = Carro;
    };
    Pessoas.prototype.dizerCarroQueTem = function () {
        return this.carro;
    };
    return Pessoas;
}());
exports.default = Pessoas;
