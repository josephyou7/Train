import { city } from './../models/city-models';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CityService {

  constructor( private http:HttpClient) {
    
  }
  
 // readonly APIUrl =`http://localhost:3000/getposts`;

  //getCityList() : Observable<citydata[]> {
  //  return this.http.get<citydata[]>(this.APIUrl);
  //}

  getCityList() {
    return [
     {"id":1, "name":"Seoul", "Rank":1},
     {"id":2, "name":"Pohang", "Rank":5},
     {"id":3, "name":"Busan", "Rank":2},
     {"id":4, "name":"Suwon", "Rank":4},
     {"id":5, "name":"Ihchon", "Rank":3}
    ];
  }

}
