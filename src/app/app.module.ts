import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GoogleChartComponent } from './googlechart/googlechart.component';
import { BarchartComponent } from './barchart/barchart.component';
import { TimelinechartComponent } from './timelinechart/timelinechart.component';

@NgModule({
  declarations: [
    AppComponent,
    GoogleChartComponent,
    BarchartComponent,
    TimelinechartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
