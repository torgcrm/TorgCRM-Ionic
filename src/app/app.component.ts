import {Component, ViewChild} from '@angular/core';
import {Nav, Platform} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { OrdersPage } from '../pages/orders/orders';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = OrdersPage;
  isAndroid: boolean = false;
  pages;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    if (!platform.is('ios')) {
      this.isAndroid = true;
    }

    this.pages = [
      {title: 'Заказы', component: OrdersPage, icon: 'play'},
      {title: 'Клиенты', component: OrdersPage, icon: 'play'},
      {title: 'Товары', component: OrdersPage, icon: 'play'},
    ]
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }
}

