import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class DbService {

  api = '/api/v1/data.php';
  
  constructor(
    private _http : Http
    ) { }

    private counter: number
    
    getClicks() {
      return this._http
      .get(this.api).toPromise().then(res => {
        return (<any>res)._body;
      });
    }
    
    
    click(guid) {
      return this._http
      .post(this.api, guid).toPromise().then(res => {
        return res;
      });
    }    
  }
