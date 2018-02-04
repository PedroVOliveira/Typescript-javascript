/*
import Concessionaria from "./Concessionaria"
import {ConcessionariaDao} from "./ConcessionariaDao"
*/
import Pessoas from "./Pessoas";
import { PessoasDao } from "./PessoasDao";

/*
let dao:ConcessionariaDao = new ConcessionariaDao()
let concessionaria = new Concessionaria("",[])

dao.inserir(concessionaria)
*/
let dao:PessoasDao = new PessoasDao()
let pessoas = new Pessoas("","")

dao.atualizar(pessoas)

/*
A interface basicamente e eu dizer para a minha classe que ela 
precisa dessas funções ou essas coisas para que ele funcione.

*/