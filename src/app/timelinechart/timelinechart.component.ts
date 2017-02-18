import { Component, OnInit } from '@angular/core';
import { GoogleChartComponent} from '../googlechart/googlechart.component';

@Component({
  selector: 'timelinechart',
  templateUrl: './timelinechart.component.html',
  styleUrls: ['./timelinechart.component.css']
})
export class TimelinechartComponent  extends GoogleChartComponent {
  private options;
  private data;
  private chart;
 
  num :number =0;
  constructor(){
    super();    
    console.log("Here is TimelinechartComponent")
  }

  public timeline_ChartData ={
                cols: [
                {type: 'string', id: 'Executor'},
                {type: 'string', id: 'Name'},
                {type: 'string', id: 'Tooltip', role: 'tooltip', p: {html: true}},
                {type: 'date', id: 'start_date'},
                {type: 'date', id: 'finish_date'},
                ],
                rows: [       
                {c:[{v: 'A'}, {v: 'John'}, {v: 'John Doe'}, {v: new Date(2016, 7, 31)}, {v: new Date(2016, 8, 1)}]},
                {c:[{v: 'A'}, {v: 'Jane'}, {v: 'Jane Doe'}, {v: new Date(2016, 7, 27)}, {v: new Date(2016, 7, 31)}]},
                {c:[{v: 'B'}, {v: 'John'}, {v: 'John Doe'}, {v: new Date(2016, 7, 30)}, {v: new Date(2016, 8, 1)}]},
                {c:[{v: 'B'}, {v: 'Jane'}, {v: 'Jane Doe'}, {v: new Date(2016, 7, 29)}, {v: new Date(2016, 8, 5)}]},
                {c:[{v: 'C'}, {v: 'John'}, {v: 'John Doe'}, {v: new Date(2016, 7, 25)}, {v: new Date(2016, 7, 29)}]},
                {c:[{v: 'C'}, {v: 'Jane'}, {v: 'Jane Doe'}, {v: new Date(2016, 7, 27)}, {v: new Date(2016, 8, 1)}]},
                {c:[{v: 'C'}, {v: 'Fred'}, {v: 'Fred Doe'}, {v: new Date(2016, 7, 21)}, {v: new Date(2016, 7, 26)}]}
                ]
     };

     public timeline_ChartData2 ={
                cols: [
                {type: 'string', id: 'Executor'},
                {type: 'string', id: 'Name'},
                {type: 'string', id: 'Tooltip', role: 'tooltip', p: {html: true}},
                {type: 'date', id: 'start_date'},
                {type: 'date', id: 'finish_date'},
                ],
                rows: [       
                {c:[{v: 'A'}, {v: 'John'}, {v: 'John Doe'}, {v: new Date(2016, 7, 31)}, {v: new Date(2016, 8, 1)}]},
                {c:[{v: 'B'}, {v: 'Jane'}, {v: 'Jane Doe'}, {v: new Date(2016, 7, 29)}, {v: new Date(2016, 8, 5)}]},
                {c:[{v: 'C'}, {v: 'John'}, {v: 'John Doe'}, {v: new Date(2016, 7, 25)}, {v: new Date(2016, 7, 29)}]},
                {c:[{v: 'C'}, {v: 'Jane'}, {v: 'Jane Doe'}, {v: new Date(2016, 7, 27)}, {v: new Date(2016, 8, 1)}]},
                ]
     };
    

    public timeline_ChartOption={
      timeline: { colorByRowLabel: true },
      backgroundColor: '#ffd',
      tooltip: {isHtml: true},
      width: '100%',
      height: '600px',
      chartArea: {
                    width: '80%',
                    height: '80%'
                },
      colors: ['red', 'blue', 'green'],
      avoidOverlappingGridLines: true
    };

  drawGraph(){
    console.log("DrawGraph Timelinechart Component...");  
    this.chart = this.createChartWrapper(this.timeline_ChartOption, "Timeline", this.timeline_ChartData, "chart_tiemlineElement");
    
    this.chart.draw();    
    var self = this;
    this.addEventHandler(this.chart, 'select', function(){
                                  let selectedObject = self.chart.getChart().getSelection();
                                  console.log('selection:' + JSON.stringify(selectedObject));
                                  self.processSelectedObject(selectedObject);
                          });
  }
  
  processSelectedObject(selection:any){
        var message = '';

        for (var i = 0; i < selection.length; i++) {
          var item = selection[i];
          if (item.row != null && item.column != null) {
            message += '{row:' + item.row + ',column:' + item.column + '}';
          } else if (item.row != null) {
            message += '{row:' + item.row + '}';
          } else if (item.column != null) {
            message += '{column:' + item.column + '}';
          }
        }
        if (message == '') {
          message = 'nothing';
        }
        alert('You selected ' + message);
  }

  clickHandler(event){
    
    let odd  =this.num ;
    this.num = (this.num ) ? 0:1;
    let newData = (odd)? this.timeline_ChartData: this.timeline_ChartData2;
    this.chart.setDataTable(newData );
    this.chart.draw();    
  }

}
