import { JosephComponent } from './../joseph/joseph.component';
//import { ChartdataComponent} from './../chartdata/chartdata.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartBase, ChartEditorComponent, ChartType, FilterType } from 'angular-google-charts';
import { Location } from '@angular/common';
import { CdataService } from './../services/cdata.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

 
  public chart = {
    title: 'Test Chart',
    type: ChartType.BarChart,
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
        startup: true
      }
    }
  };
  
/*
 public dashboardData =  [
    ["Fromdata", 5],
    ['Elisa', 7],
    ['Robert', 3],
    ['John', 2],
    ['Jessica', 6],
    ['Aaron', 1],
    ['Margareth', 8]
  ];
*/
  public filterType = FilterType.NumberRange;

  public chartWrapperSpecs: google.visualization.ChartSpecs = {
    chartType: ChartType.AreaChart,
    dataTable: [
      ['SMR CV', 'US Cents/KG'],
      [new Date(1990, 0, 1), 10],
      [new Date(1991, 0, 1), 20],
      [new Date(1992, 0, 1), 40],
      [new Date(1993, 0, 1), 80],
      [new Date(1994, 0, 1), 160],
      [new Date(1995, 0, 1), 320],
      [new Date(1996, 0, 1), 640],
      [new Date(1997, 0, 1), 1280],
      [new Date(1998, 0 ,1), 1380]
    ]
  };

  @ViewChild(ChartEditorComponent)
  public readonly editor: ChartEditorComponent;

 
  public edit(chart: ChartBase) {
    this.editor
      .editChart(chart)
      .afterClosed()
      .subscribe(result => {
        if (result) {
          console.log(result);
        } else {
          console.log('Editing was cancelled');
        }
      });
  }

  public goBack() {
    this.location.back();
  }


 
  public chartdata =[];  
  public errorMsg;
  public data = [];
  public piedata = [];
  
  constructor(private location: Location, private _cdataService : CdataService) {}

  ngOnInit() {
    this._cdataService.getCdata()
      .subscribe(data => {
        this.chartdata = data;
        for (let chart of this.chartdata) {
          this.piedata.push([chart.name, Number(chart.age)]);
        }    
      },
                 error => this.errorMsg = error);
  }

      public dashboardData = this.piedata
  // https://stackoverflow.com/questions/46769042/subscribe-to-observable-is-returning-undefined
}
