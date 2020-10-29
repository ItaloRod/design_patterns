import Subject from "./_Subject";

export default interface Observer {
  update(subject: Subject): void
}
