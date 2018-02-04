"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pessoas_1 = require("./Pessoas");
var PessoasDao = /** @class */ (function () {
    function PessoasDao() {
        this.nomeTabela = "tb_Pessoas";
    }
    PessoasDao.prototype.inserir = function (object) {
        console.log("lógica de inserir");
        "lógica de inserir";
        return true;
    };
    PessoasDao.prototype.atualizar = function (object) {
        console.log("lógica atualizar");
        return true;
    };
    PessoasDao.prototype.remover = function (id) {
        console.log("lógica delete");
        return new Pessoas_1.default("", "");
    };
    PessoasDao.prototype.selecionar = function (id) {
        console.log("lógica select");
        return new Pessoas_1.default("", "");
    };
    PessoasDao.prototype.selecionarTodos = function () {
        console.log("lógica select all");
        return [new Pessoas_1.default("", "")];
    };
    return PessoasDao;
}());
exports.PessoasDao = PessoasDao;
