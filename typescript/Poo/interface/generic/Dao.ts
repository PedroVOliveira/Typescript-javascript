import { DaoInterface } from "./DaoInterface";

export class Dao<T> implements DaoInterface<T>{

    nomeTabela:string = ""

    inserir(object: T):boolean{
        
        console.log("lógica de inserir")
        return true
    }
    atualizar(object:T):boolean{

        console.log("lógica atualizar")
        return true
    }
    remover(id:Number):T{
       
        console.log("lógica delete")
        return Object()
    }
    selecionar(id:Number):T{
        
        console.log("lógica select")
        return Object()
    }
    selecionarTodos():[T]{
        
        console.log("lógica select all")
        return [Object()]
    }
}