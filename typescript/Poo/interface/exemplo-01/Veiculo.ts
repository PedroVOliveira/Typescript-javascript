export default class Veiculo{
   
    protected modelo:string
    protected velocidade:number = 0

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

/* 
  a clase veiculo e a classe pai de moto e carro 

  OBS: os filhos herdam caracteristicas dos pais mais os pais não herdam caracteristicas dos filhos
*/