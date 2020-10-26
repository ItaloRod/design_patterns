import Jornal from "./Jornal";
import Observer from "./Observer";
import Subject from "./Subject";


// Assinante B que possui sua própria lógica de update, ou seja, só ele sabe
// o que deseja receber do subject que ele assinou.
export default class SubscriberB implements Observer {
  public update(subject: Subject): void {
    if (subject instanceof Jornal && (subject.edition === 0 || subject.edition >= 2)) {
      console.log('Assinante B: Recebeu uma edição do jornal')
    }
  }
}
