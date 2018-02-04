import Carro from "./Carro"
import Moto from "./Moto"

let carro = new Carro("cruzer", 4)
carro.acelerar()

let moto = new Moto()
moto.acelerar()


console.log(carro)
console.log(moto)

/* 
  A classe veiculo e a classe pai de moto e carro 

  OBS: os filhos herdam caracteristicas dos pais mais os pais não herdam caracteristicas dos filhos
*/