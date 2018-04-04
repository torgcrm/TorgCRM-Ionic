import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';

import {MyApp} from './app.component';
import {OrdersPage} from '../pages/orders/orders';
import {SideMenu} from '../parts/sidemenu/sidemenu';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {JwtInterceptor} from "../interceptors/JwtInterceptor";
import {LoginPage} from "../pages/login/login";
import {OrderTabs} from "../pages/orders/order-tabs";
import {CallNumber} from "@ionic-native/call-number";
import {OrderEdit} from "../pages/orders/order-edit";
import {ProductSearch} from "../pages/products/product-search";
import {CRMRange} from "../components/CRMRange";

@NgModule({
  declarations: [
    MyApp,
    OrdersPage,
    OrderTabs,
    OrderEdit,
    ProductSearch,
    SideMenu,
    LoginPage,
    CRMRange,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    OrdersPage,
    OrderTabs,
    OrderEdit,
    ProductSearch,
    LoginPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HttpClientModule,
    CallNumber,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true}
  ]
})
export class AppModule {
}
