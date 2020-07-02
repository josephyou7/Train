import { CityService } from './../services/city.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-citylist',
  templateUrl: './citylist.component.html',
  styleUrls: ['./citylist.component.css']
})
export class CitylistComponent implements OnInit {
  public citydata:any[] =[];
  constructor(private _cityService : CityService) { }

  ngOnInit() {
    this.citydata = this._cityService.getCityList();
  }

}
