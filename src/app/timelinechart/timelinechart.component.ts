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
    this.addEventHandler(this.chart, 'select', function( ){
                                  let selectedObject = self.chart.getChart().getSelection();
                                  console.log('selection:' + JSON.stringify(selectedObject));
                                  self.processSelectedObject(selectedObject);
                          });
  }
  
  processSelectedObject(selection:any){
        var message = '';
        var x,y:number =0;
        for (var i = 0; i < selection.length; i++) {
          var item = selection[i];
          x = (item.row)? item.row:0
          y = (item.column)? item.column:0;
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
        let value  = this.chart.getDataTable().getValue(x,y);
        let formattedValue = this.chart.getDataTable().getFormattedValue(x,y);
        //message += '{row:' + item.row + ',column:' + item.column 
        alert('You selected ' + message + "  " + value );
  }

  buildNewDataTable(){
    var g = this.getGoogle();
    var dataTable = new g.visualization.DataTable();

        dataTable.addColumn({ type: 'string', id: 'Room' });
        dataTable.addColumn({ type: 'string', id: 'Name' });
        dataTable.addColumn({ type: 'date', id: 'Start' });
        dataTable.addColumn({ type: 'date', id: 'End' });
        dataTable.addRows([
          [ 'Magnolia Room',  'CSS Fundamentals',    new Date(0,0,0,12,0,0),  new Date(0,0,0,14,0,0) ],
          [ 'Magnolia Room',  'Intro JavaScript',    new Date(0,0,0,14,30,0), new Date(0,0,0,16,0,0) ],
          [ 'Magnolia Room',  'Advanced JavaScript', new Date(0,0,0,16,30,0), new Date(0,0,0,19,0,0) ],
          [ 'Gladiolus Room', 'Intermediate Perl',   new Date(0,0,0,12,30,0), new Date(0,0,0,14,0,0) ],
          [ 'Gladiolus Room', 'Advanced Perl',       new Date(0,0,0,14,30,0), new Date(0,0,0,16,0,0) ],
          [ 'Gladiolus Room', 'Applied Perl',        new Date(0,0,0,16,30,0), new Date(0,0,0,18,0,0) ],
          [ 'Petunia Room',   'Google Charts',       new Date(0,0,0,12,30,0), new Date(0,0,0,14,0,0) ],
          [ 'Petunia Room',   'Closure',             new Date(0,0,0,14,30,0), new Date(0,0,0,16,0,0) ],
          [ 'Petunia Room',   'App Engine',          new Date(0,0,0,16,30,0), new Date(0,0,0,18,30,0) ]]);

        return dataTable;
  }

  clickHandler(event){
    
    let odd  =this.num ;
    this.num = (this.num ) ? 0:1;
    let newData = (odd)? this.timeline_ChartData: this.buildNewDataTable();
    this.chart.setDataTable(newData );
    
    this.chart.draw();    
  }

}
