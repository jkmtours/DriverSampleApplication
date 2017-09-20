/**
 * Created by singhpa on 7/26/2017.
 */
import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {AppHttpClient} from "./common/apphttpclient.service";

@Injectable()
export class DriverService {

  private driversUrl = 'http://localhost:8080/api/drivers';

  constructor(private _apphttp: AppHttpClient) {

  }

  getDrivers() {
    let URL = "http://localhost:8080/api/drivers";
    return this._apphttp.get(URL)
      .then(function(response: Response) {
        let headers = response.headers;
        return response.json();
      }, function(error:any) {
        let errMsg = (error._body) ? error._body :
          error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Promise.reject(errMsg);
      });
  }

  private extractData(res: Response) {
    if (res.status < 200 || res.status >= 300) {
      throw new Error('Bad response status: ' + res.status);
    }
    return res.json();
  }

  /**
   *
   * @param error
   * @returns {Promise<void>|Promise<T>}
   */
  private handleError (error: any) {
    // In a real world app, we might send the error to remote logging infrastructure
    let errorMsg = JSON.parse(error._body);
    let errMsg = errorMsg.message || 'Server error';
    console.error(errMsg); // log to console instead
    return Promise.reject(errMsg);
  };
}
