import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {HttpClient} from "@angular/common/http";
import {User} from "../../model/User";
import {OrdersPage} from "../orders/orders";
import {Token} from "../../model/Token";

@Component({
  selector: 'login',
  templateUrl: 'login.html'
})
export class LoginPage {
  private user: User;

  constructor(public navCtrl: NavController,
              private http: HttpClient) {
    this.user = new User()
  }

  authorize(form) {
    this.http.post('http://localhost:8080/torgcrm-web/auth/login', form)
      .subscribe((token:Token) => {
        localStorage.setItem('token', token.token)
        this.navCtrl.setRoot(OrdersPage)
      })
  }
}
