import Observer from "./_Observer"
import Subject from "./_Subject"

//  Classe Jornal que implementa o Subject, Fica responsável pela lógica de anexar,
// desanexar e notificar cada um dos Observers.
export default class Jornal implements Subject {
  public edition: number
  private observers: Observer[] = []

  public attach(observer: Observer): void {
    const isExist = this.observers.includes(observer)

    if (isExist) {
      return console.log('Jornal: Assinante já foi anexado.')
    }

    console.log('Jornal: Anexado um assinante.')
    this.observers.push(observer)
  }

  public detach(observer: Observer): void {
    const observerIndex = this.observers.indexOf(observer)

    if (observerIndex === -1) {
      return console.log('Jornal: Assinante inexistente.')
    }

    this.observers.splice(observerIndex, 1)
    console.log('Jornal: Desanexado um assinante.')
  }

  public notify(): void {
    console.log('Jornal: Notificando Assinantes...')
    this.observers.forEach((observer: Observer) => observer.update(this))
  }

  public someBusinessLogic(): void {
    console.log('\nJornal: Estou fazendo algo de importante.');
    this.edition = Math.floor(Math.random() * (10 + 1));

    console.log(`Jornal: Minha edição foi alterada para: ${this.edition}`);
    this.notify();
  }
}
