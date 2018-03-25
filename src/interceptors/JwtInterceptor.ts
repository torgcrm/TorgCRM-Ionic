import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/Rx';
import {Injectable} from '@angular/core';
import {App, NavController} from "ionic-angular";
import {LoginPage} from "../pages/login/login";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  private nav: NavController;

  constructor(app:App) {
    this.nav = app.getActiveNav()
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authReq = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${localStorage.getItem('token')}`),
    });
    return next.handle(authReq).catch(err => this.handleError(err));
  }

  private handleError(err: HttpErrorResponse): Observable<any> {
    if (err.status === 401) {
      this.nav.push(LoginPage);
    }
    return Observable.throw(err);
  }
}
