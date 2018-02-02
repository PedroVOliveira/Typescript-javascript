export default class Carro{

    private modelo:string
    private numeroDeportas:number
    private velocidade:number = 0

    constructor(modelo:string, numeroDePortas:number){

        this.modelo = modelo
        this.numeroDeportas = numeroDePortas
    }

    public acelerar ():void {
        
        this.velocidade = this.velocidade + 10
    }

    public parar ():void{

        this.velocidade = 0

    }

    public velocidadeAtual(): number {
        
        return this.velocidade
    }
}