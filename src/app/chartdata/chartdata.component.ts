import { JosephComponent } from './../joseph/joseph.component';
import { HttpClient } from '@angular/common/http';
import { CdataService } from './../services/cdata.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartBase, ChartEditorComponent, ChartType, FilterType } from 'angular-google-charts';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-chartdata',
  templateUrl: './chartdata.component.html',
  styleUrls: ['./chartdata.component.css']
})
export class ChartdataComponent implements OnInit {

  public chartdata =[];  
  public errorMsg;
  public data = [];
  public bardata = [];

  constructor( private _cdataService : CdataService) {}

  ngOnInit() {
    this._cdataService.getCdata()
      .subscribe(data => {
        this.chartdata = data;
        for (let chart of this.chartdata) {
          this.bardata.push([String(chart.name), Number(chart.age)]);
          
        }    
      },
                 error => this.errorMsg = error);
                 console.log(this.bardata);
  }

     //public dashboardData = this.bardata
     
          public chart = {
      title: 'Test Chart',
      type: ChartType.BarChart,
   /*   
     data: [
        ['Copper', 8.94],
        ['Silver', 10.49],
        ['Gold', 19.3],
        ['Platinum', 21.45]
      ],
    */ 
      columnNames: ['Element', 'Density'],
      options: {
        animation: {
          duration: 250,
          easing: 'ease-in-out',
          startup: true
        }
      }
    };  
  
}

 
