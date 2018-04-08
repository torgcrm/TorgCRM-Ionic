import {Component, OnInit} from "@angular/core";
import {Customer} from "../../model/Customer";
import {CustomerService} from "../../services/CustomerService";

@Component({
  templateUrl: 'customers.html'
})
export class CustomersPage implements OnInit {
  private customers: Array<Customer>;

  constructor(private service: CustomerService) {
  }

  ngOnInit(): void {
    this.service.getAll().subscribe((res: Array<Customer>)=> {
      this.customers = res;
      console.log(res)
    });
  }

  onEdit(customer) {
  }

  onCall(customer) {
  }
}
