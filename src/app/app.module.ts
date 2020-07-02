import { CdataService } from './services/cdata.service';
import { RainService } from './services/rain.service';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { HttpClientModule } from '@angular/common/http'; 
import { GoogleChartsModule } from 'angular-google-charts';
import { Ng2GoogleChartsModule, GoogleChartsSettings } from 'ng2-google-charts';
//import { MatTableDataSource } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
 
//import { ConnectionComponent } from './connection/connection.component';
import { JosephComponent } from './joseph/joseph.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CityService } from 'src/app/services/city.service';
import { ChartComponent } from './chart/chart.component';
import { CitylistComponent } from './citylist/citylist.component';
import { RainlistComponent } from './rainlist/rainlist.component';
import { ChartdataComponent } from './chartdata/chartdata.component';
import { Ng2googleChartComponent } from './ng2google-chart/ng2google-chart.component';

@NgModule({
  declarations: [
    AppComponent,
 //   ConnectionComponent,
  JosephComponent,
 ChartComponent,
 CitylistComponent,
 RainlistComponent,
 ChartdataComponent,
 Ng2googleChartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MatSliderModule,
    MatSlideToggleModule,
       // MatTableDataSource,
    BrowserAnimationsModule,
    HttpClientModule,
    GoogleChartsModule,
   //Ng2GoogleChartsModule
  ],
  providers: [CityService,CdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
