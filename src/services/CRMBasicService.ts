import {HttpClient} from '@angular/common/http';

export class CRMBasicService {
  constructor(private _url: string,
              private _http: HttpClient) {
  }

  public getAll() {
    return this._http.get(this._url);
  }

  public update(obj: any) {
    return this._http.post(this._url, obj);
  }

  public create(obj: any) {
    return this._http.put(this._url, obj);
  }

  public delete(id: number) {
    const deleteUrl = `${this._url}/${id}`;
    return this._http.delete(deleteUrl);
  }

  public getById(id: number) {
    const url = `${this._url}/details/${id}`;
    return this._http.get(url);
  }
}
