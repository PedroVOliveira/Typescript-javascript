"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Carro_1 = require("./Carro");
var Moto_1 = require("./Moto");
var carro = new Carro_1.default("cruzer", 4);
carro.acelerar();
var moto = new Moto_1.default();
moto.acelerar();
console.log(carro);
console.log(moto);
/*
  A classe veiculo e a classe pai de moto e carro

  OBS: os filhos herdam caracteristicas dos pais mais os pais não herdam caracteristicas dos filhos
*/ 
