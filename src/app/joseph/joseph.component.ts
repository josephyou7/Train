import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-joseph',
  templateUrl: './joseph.component.html',
  styleUrls: ['./joseph.component.css'],
})
export class JosephComponent implements OnInit {
  family: string[] = ['Joseph', 'Josephina', 'Max', 'Brain'];
  // grade= {'a':10, 'b':12, 'c': 33};

  // family: [{name:string}] = [{name:"Joseph"},{name:"Josephina"},{name:"Max"},{name:"Brain"}];

  greeting = 'Good Morning!! Joseph';

  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['name', 'countryCode'];

  //Angular HTTP GET example
  // url=`http://localhost:3000/getposts`;
  // items=[];

  constructor(private http: HttpClient) {
    /*  this.http.get(this.url).toPromise().then(data =>{
     // console.log(data);
         
       for (let key in data)
         if (data.hasOwnProperty(key))
          this.items.push(data[key]);
          console.log(this.items); 
    });
  */
  }

  ngOnInit() {
    this.refreshCityList();
  }

  refreshCityList() {
    var dummyData = [
      { name: 'Seoul', countryCode: 1 },
      { name: 'Incheon', countryCode: 2 },
    ];
  }

  josephButton() {
    console.log('Hi This is Button function test');
  }
}
