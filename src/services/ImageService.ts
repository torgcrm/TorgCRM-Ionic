import {CRMBasicService} from "./CRMBasicService";
import {environment} from "../environment";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";

@Injectable()
export class ImageService extends CRMBasicService {
  constructor(private http: HttpClient) {
    super(environment.apiUrl + '/image', http);
  }

  upload(base64: string) {
    this.http.post(environment.apiUrl + "/image/upload", base64).subscribe();
  }
}
