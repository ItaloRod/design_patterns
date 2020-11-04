import ConcreteProduct1 from "./_Ship";
import Creator from "./_Creator";
import Transport from "./_Transport";
import Ship from "./_Ship";

export default class ShipCreator extends Creator {
  public factoryMethod(): Transport {
    return new Ship()
  }
}
