import {Component} from "@angular/core";
import {OrdersPage} from "./orders";
import {LoginPage} from "../login/login";

@Component({
  selector: 'order-tabs',
  templateUrl: 'order-tabs.html'
})
export class OrderTabs {
  private newOrders: any;
  private pendingOrders: any;
  private searchOrders: any;

  constructor() {
    this.newOrders = OrdersPage
    this.pendingOrders = LoginPage
    this.searchOrders = OrdersPage
  }
}
