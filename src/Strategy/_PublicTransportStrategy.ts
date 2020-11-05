import RouteStrategy from "./_RouteStrategy";

export default class PublicTransportStrategy implements RouteStrategy {
  public buildRoute(): void {
    console.log('Transporte Público: A rota de Transporte público é de 500KM')
  }
}
