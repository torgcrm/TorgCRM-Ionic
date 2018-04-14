import {CRMBasicService} from "./CRMBasicService";
import {environment} from "../environment";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";

@Injectable()
export class ProductService extends CRMBasicService {
  constructor(http: HttpClient) {
    super(environment.apiUrl + '/products', http);
  }
}
