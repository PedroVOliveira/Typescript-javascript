import {DaoInterface} from "./DaoInterface"
import Pessoas from "./Pessoas"

export class PessoasDao implements DaoInterface{

    nomeTabela:string = "tb_Pessoas"

    inserir(object: Pessoas):boolean{
        
        console.log("lógica de inserir")
        "lógica de inserir"
        return true
    }
    atualizar(object:Pessoas):boolean{

        console.log("lógica atualizar")
        return true
    }
    remover(id:Number):Pessoas{
       
        console.log("lógica delete")
        return new Pessoas("","")
    }
    selecionar(id:Number):Pessoas{
        
        console.log("lógica select")
        return new Pessoas("","")
    }
    selecionarTodos():[any]{
        
        console.log("lógica select all")
        return[new Pessoas("","")]
    }
}