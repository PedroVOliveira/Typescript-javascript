import Carro from "./Carro"
import Moto from "./Moto"
import Concessionaria from "./Concessionaria"

let carro = new Carro("cruzer", 4)
carro.acelerar()

let moto = new Moto()
moto.acelerar()

let concessionaria = new Concessionaria("",[])
console.log(carro)
console.log(moto)
console.log(concessionaria.fornecerHorariosDeFuncionamento())


/*
A interface basicamente e eu dizer para a minha classe que ela 
precisa dessas funções ou essas coisas para que ele funcione.

*/