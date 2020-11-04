import Transport from "./_Transport";

export default class Ship implements Transport {
  public deliver(): string {
    return '{ Produto entregue de navio }'
  }
}


