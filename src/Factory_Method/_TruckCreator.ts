import Truck from "./_Truck";
import Creator from "./_Creator";
import Transport from "./_Transport";

export default class TruckCreator extends Creator {
  public factoryMethod(): Transport {
    return new Truck()
  }
}
