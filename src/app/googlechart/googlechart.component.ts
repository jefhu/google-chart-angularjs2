//credit to http://stackoverflow.com/questions/37542408/angular2-google-charts-how-to-integrate-google-charts-in-angular2

import { Component, OnInit} from '@angular/core';
declare var google:any;
@Component({
  selector: 'chart',
  templateUrl: './googlechart.component.html',
  styleUrls: ['./googlechart.component.css']
})
export class GoogleChartComponent implements OnInit {
  private static googleLoaded:any;

  constructor(){
      console.log("Here is GoogleChartComponent")
  }

  getGoogle() {
      return google;
  }
  ngOnInit() {
    console.log('ngOnInit');
    if(!GoogleChartComponent.googleLoaded) {
      GoogleChartComponent.googleLoaded = true;
      google.charts.load('current',  {packages: ['corechart', 'bar']});
    }
    google.charts.setOnLoadCallback(() => this.drawGraph());
  }

  drawGraph(){
      console.log("DrawGraph base class!!!! ");
  }

  createBarChart(element:any):any {
      return new google.visualization.BarChart(element);
  }

  createDataTable(array:any[]):any {
      return google.visualization.arrayToDataTable(array);
  }

  

  createChartWrapper(chartOptions,chartType,chartData,elementId):any{
    return new google.visualization.ChartWrapper({
             chartType: chartType,
             dataTable:chartData ,
             options:chartOptions || {},
             containerId: elementId
           });
  }

  addEventHandler(chartWrapper, eventName, handlerFunction){
    //google.visualization.events.addListener(chartWrapper, 'ready', handlerFunction);
    console.log('googlechart:' + eventName);
    google.visualization.events.addListener(chartWrapper, eventName, handlerFunction);
  }

  
}
