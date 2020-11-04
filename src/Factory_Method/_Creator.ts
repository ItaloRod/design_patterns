import Transport from "./_Transport"

export default abstract class Creator {

  public abstract factoryMethod(): Transport
  public someOperation(): string {
    const transport = this.factoryMethod()
    return `Creator: O Mesmo código do Criador, funcionou com ${transport.deliver}`
  }
}
