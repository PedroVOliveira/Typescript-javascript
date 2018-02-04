import Carro from "./Carro"

export default class Pessoas{

    private nome:string
    private carroPreferido:string
    private carro:Carro

    constructor(nome:string, carroPreferido:string){
         this.nome = nome
         this.carroPreferido = carroPreferido
    }

    public dizerNome():string{

        return this.nome
    }

    public dizerCarroPreferido():string{

        return this.carroPreferido
    }

    public comprarCarro(Carro:Carro):void{
        this.carro = Carro
    }

    public dizerCarroQueTem():Carro{
        return this.carro
    }
}