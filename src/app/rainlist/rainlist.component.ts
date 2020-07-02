import { RainService } from '../services/rain.service';
import { Component, OnInit } from '@angular/core';
import { ChartBase, ChartEditorComponent, ChartType, FilterType } from 'angular-google-charts';
 
@Component({
  selector: 'app-rainlist',
  templateUrl: './rainlist.component.html',
  styleUrls: ['./rainlist.component.css']
})
export class RainlistComponent implements OnInit {
  public chart = {
    title: 'Temp Chart',
    type: ChartType.ColumnChart,
    
    data: [
      ['Copper', 8.94],
      ['Silver', 10.49],
      ['Gold', 19.3],
      ['Platinum', 21.45]
    ],
   
    columnNames: ['Element', 'Density'],
    options: {
      animation: {
        duration: 250,
        easing: 'ease-in-out',
        startup: true,

       },
      hAxis: {
        title: 'Year'
       },
      vAxis:{
        title: 'Temperature',
       // scaleType: 'mirrorLog',
       // ticks: [-1,-0.5,0,0.5,1]
      },
      width : 1200,
      height : 500 

    }
  };


  public raindata =[];
  public errorMsg;
  public rdata = [];
  public bardata =[]  ;
  rainservice: any;
  constructor(private _rainService : RainService) { }

  ngOnInit() {
      this._rainService.getRain()
        .subscribe(rdata => {
          this.raindata = rdata;
          
          for (let chart of this.raindata) {
            this.bardata.push([chart.Year.toString(),  Number(chart.Glob)]);
          }

        } ,
                   error => this.errorMsg = error);
  
        console.log( this.bardata);
               
  }





}
