import RouteStrategy from "./_RouteStrategy";

export default class CarStrategy implements RouteStrategy {

  public buildRoute(): void {
    console.log('Carro: Sua rota de carro é de 150KM')
  }
}
