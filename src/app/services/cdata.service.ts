import { Ichart } from './../models/cdata';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from "@angular/core";
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable({
  providedIn: 'root'
})
export class CdataService {

  private _url: string ="http://localhost:3000/getcdata";
  private cdataUpdated = new Subject<Ichart[]>();

  constructor(private http: HttpClient) { }

  getCdata():Observable<Ichart[]>{
    return this.http.get<Ichart[]>(this._url)
    .catch(this.errorHandler);
  }

  errorHandler(error: HttpErrorResponse){
    return Observable.throw(error.message || "Server Error");
 
   }
    /*  return [
     ["Michael", 5],
     ["Elisa", 7],
     ["Robert", 3],
     ["John", 2],
     ["Jessica", 6],
     ["Aaron", 1],
     ["Margareth", 8]
    ];
  */
  

}
