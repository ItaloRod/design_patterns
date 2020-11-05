import RouteStrategy from "./_RouteStrategy";

export default class Navigator {

  private routeStrategy: RouteStrategy

  constructor(strategy: RouteStrategy) {
    this.routeStrategy = strategy
  }

  public setStrategy(strategy: RouteStrategy) {
    this.routeStrategy = strategy
  }

  public doSomeBusinessLogic(): void {
    console.log('Context: Sorting data using the strategy (not sure how it\'ll do it)')
    const result = this.routeStrategy.buildRoute()
  }
}
