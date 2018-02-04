import {DaoInterface} from "./DaoInterface"
import Concessionaria from "./Concessionaria"

export class ConcessionariaDao implements DaoInterface{

    nomeTabela:string = "tb_concessionaria"

    inserir(object: Concessionaria):boolean{
        
        console.log("lógica de inserir")
        "lógica de inserir"
        return true
    }
    atualizar(object:Concessionaria):boolean{

        console.log("lógica atualizar")
        return true
    }
    remover(id:Number):Concessionaria{
       
        console.log("lógica delete")
        return new Concessionaria('',[])
    }
    selecionar(id:Number):Concessionaria{
        
        console.log("lógica select")
        return new Concessionaria("",[])
    }
    selecionarTodos():[any]{
        
        console.log("lógica select all")
        return[new Concessionaria("",[])]
    }
}