import {Customer} from "./Customer";

export class Order {
  id: number;
  phone: string;
  comment: string;
  products: any;
  customer: Customer;

  constructor() {
    this.customer = new Customer();
  }
}
