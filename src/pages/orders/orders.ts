import {Component, OnInit} from '@angular/core';
import {NavController} from 'ionic-angular';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'page-home',
  templateUrl: 'orders.html'
})
export class OrdersPage implements OnInit {
  constructor(public navCtrl: NavController,
              private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get('http://localhost:8080/torgcrm-web/orders')
      .subscribe(res => console.log(res))
  }
}
