import Observer from "./_Observer";

export default interface Subject {
  attach(observer: Observer): void
  detach(observer: Observer): void
  notify(): void
}
