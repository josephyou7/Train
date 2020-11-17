import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Irain } from '../models/rain';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable({
  providedIn: 'root',
})
export class RainService {
  //private _url: string ="/assets/data/rain.jason";
  private _url: string = 'http://localhost:3000/getposts';

  constructor(private http: HttpClient) {}

  getRain(): Observable<Irain[]> {
    return this.http.get<Irain[]>(this._url).catch(this.errorHandler);
  }

  errorHandler(error: HttpErrorResponse) {
    return Observable.throw(error.message || 'Server Error');
  }
}
