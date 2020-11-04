import Transport from "./_Transport";

export default class Truck implements Transport {
  public deliver(): string {
    return '{ Produto entregue de caminhão }'
  }
}


