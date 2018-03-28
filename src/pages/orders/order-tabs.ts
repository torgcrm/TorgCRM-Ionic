import {Component} from "@angular/core";
import {OrdersPage} from "./orders";
import {LoginPage} from "../login/login";
import {OrderEdit} from "./order-edit";

@Component({
  selector: 'order-tabs',
  templateUrl: 'order-tabs.html'
})
export class OrderTabs {
  private newOrders: any;
  private pendingOrders: any;
  private searchOrders: any;
  private createOrder: any;

  constructor() {
    this.newOrders = OrdersPage;
    this.pendingOrders = LoginPage;
    this.searchOrders = OrdersPage;
    this.createOrder = OrderEdit;
  }
}
