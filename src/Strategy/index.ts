import CarStrategy from "./_CarStrategy"
import PublicTransportStrategy from "./_PublicTransportStrategy"
import Navigator from "./_Navigator"

const navigator = new Navigator(new CarStrategy())
console.log('Client: Navegando usando um carro')
navigator.doSomeBusinessLogic()

console.log('')

console.log('Client: Navegando usando Transporte Público')

navigator.setStrategy(new PublicTransportStrategy())
navigator.doSomeBusinessLogic()
