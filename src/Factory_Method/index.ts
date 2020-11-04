import ConcreteCreator1 from "./_ShipCreator";
import TruckCreator from "./_TruckCreator"
import Creator from "./_Creator"
import ShipCreator from "./_ShipCreator"

function clientCode(creator: Creator) {
  console.log('Cliente: Eu não tenho conhecimento da classe do criador, mas ainda funciona')
  console.log(creator.someOperation())
}

console.log('App: Inicialização com o ShipCreator')
clientCode(new ShipCreator())
console.log(' ')

console.log('App: Inicialização com o TruckCreator')
clientCode(new TruckCreator())
console.log(' ')
