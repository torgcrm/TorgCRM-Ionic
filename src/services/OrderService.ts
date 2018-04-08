import {Injectable} from "@angular/core";
import {CRMBasicService} from "./CRMBasicService";
import {HttpClient} from "@angular/common/http";
import {environment} from "../environment";

@Injectable()
export class OrderService extends CRMBasicService {
  constructor(http: HttpClient) {
    super(environment.apiUrl + '/orders', http);
  }
}
