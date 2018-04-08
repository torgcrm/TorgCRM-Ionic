import {Component} from "@angular/core";
import {CustomersPage} from "./customers";

@Component({
  templateUrl: 'customers-tab.html',
  selector: 'customers-tab-page'
})
export class CustomersTabPage {
  private customersPage: any;
  private customerSearchPage: any;
  private createCustomerPage: any;

  constructor() {
    this.customersPage = CustomersPage;
    this.customerSearchPage = CustomersPage;
    this.createCustomerPage = CustomersPage;
  }
}
