import Jornal from "./Jornal";
import Observer from "./Observer";
import Subject from "./Subject";

// Assinante A que possui sua própria lógica de update, ou seja, só ele sabe
// o que deseja receber do subject que ele assinou.
export default class SubscriberA implements Observer {
  public update(subject: Subject): void {
    if (subject instanceof Jornal && (subject.edition < 3)) {
      console.log('Assinante A: Recebeu uma edição do jornal')
    }
  }
}
