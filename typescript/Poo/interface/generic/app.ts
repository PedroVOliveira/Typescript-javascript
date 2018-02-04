import Concessionaria from "./Concessionaria"
import Pessoas from "./Pessoas"
import { Dao } from "./Dao"

let pessoas = new Pessoas("","")
let concessionaria = new Concessionaria("",[])
let dao:Dao<Concessionaria> = new Dao<Concessionaria>()

dao.atualizar(concessionaria)
/*
A interface basicamente e eu dizer para a minha classe que ela 
precisa dessas funções ou essas coisas para que ele funcione.

*/