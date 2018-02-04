export interface DaoInterface<T>{

    nomeTabela:string

    inserir(object: T):boolean
    atualizar(object:T):boolean
    remover(id:Number):T
    selecionar(id:Number):T
    selecionarTodos():[T]
}