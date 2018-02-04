"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
import Concessionaria from "./Concessionaria"
import {ConcessionariaDao} from "./ConcessionariaDao"
*/
var Pessoas_1 = require("./Pessoas");
var PessoasDao_1 = require("./PessoasDao");
/*
let dao:ConcessionariaDao = new ConcessionariaDao()
let concessionaria = new Concessionaria("",[])

dao.inserir(concessionaria)
*/
var dao = new PessoasDao_1.PessoasDao();
var pessoas = new Pessoas_1.default("", "");
dao.atualizar(pessoas);
/*
A interface basicamente e eu dizer para a minha classe que ela
precisa dessas funções ou essas coisas para que ele funcione.

*/ 
